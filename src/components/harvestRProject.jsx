import React, {Component} from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';

export default class HarvestRProject extends Component {
  render() {
    return (
      <div style={{
        textAlign: "justify"
      }}>
        <h2>HarvesR: using reinforcement learning for fruit picking</h2>

        <h4>Introduction
        </h4>
        <div>
          <div id="fig1" className="halfscreen">
            <img
              src={'/harvestr/fig1.jpg'}
              style={{
              width: '100%'
            }}/>
            <div>
              <b>Fig. 1
              </b>
              &nbsp; Averages and range of reported quantitative performance indicators:
              localization success, detachment success, harvest success, fruit damage, and
              peduncle damage. N represents the number of distinct projects. (Bac et al.)
            </div>
          </div>
          <p>
            Because fruit harvesting is classified as a low skill job, pundits routinely put
            it in the category of jobs on the verge of automation. However, in accordance to
            Moravec’s paradox, in actuality, fruit picking is much harder to automate than
            many jobs that are regarded as “high skill”, such as accounting, radiography,
            stock trading etc. In Morave’s words: "it is comparatively easy to make
            computers exhibit adult level performance on intelligence tests or playing
            checkers, and difficult or impossible to give them the skills of a one-year-old
            when it comes to perception and mobility". This is in part due to the high
            variability in the environment, and high adaptability required to conditions
            such as fruit shape/distance/color, lighting, occlusion etc. A review of the
            state of the art in fruit harvesting concluded that the performance of
            harvesting robots has been stagnant for the past 30 years [1]. The same review
            found that the average harvest success was 66% (Fig. 1) and the average cycle
            time was 33s. It is worth mentioning that this data is skewed by easily
            harvestable crops such as kiwis, apples, roses etc. For crops such as peppers,
            tomatoes and strawberries the performance is even worse.
          </p>

          <p>
            So far, harvesting robots have used classical algorithms for planning and
            execution. As such, it is very hard to anticipate and hard code all the
            conditions a harvesting robot might find itself in.
          </p>

          <p>
            This paper proposes a different approach – one based on reinforcement learning.
            Classical planning is still used for moving from one fruit to another, but once
            the gripper is in proximity of a fruit, a neural network trained in simulation
            is used to generate a control sequence.
          </p>
          <p>
            Section 1 describes the architecture of the robot and the simulation environment
            used for simulating the plant dynamics, and the robot-plant interactions.
            Section 2 details the internal model used for planning, how this model is
            acquired in simulation, how this model transfers from simulation to the real
            world, and how this model is acquired in the real world. Section 3 discusses the
            control algorithm. Section 4 discusses the training methodology.
          </p>
        </div>

        <h4>1. Robot architecture and the Unity simulation environment</h4>
        <h5>1.1 Robot Architecture</h5>
        <div>

          <div id="fig2" className="halfscreen">
            <img
              src={'/harvestr/fig2.jpg'}
              style={{
              width: '100%'
            }}/>
            <div>
              <b>Fig. 2
              </b>
              &nbsp; 4 Degree of freedom (DOF) fruit-picking robot. Similar systems are used
              in many harvesting robots, as it strikes a good balance between simplicity and
              versatility
            </div>
          </div>
          <p>Although the HarvestR architecture makes few assumptions about the
            architecture of the robot, for demonstration and testing a 4DOF robot is used
            (Fig.2). The robot can move across a raw of crops, up and down to harvest plants
            at different heights, it can rotate in order to navigate between stems, leaves
            and other obstacles and adapt to the position of the target fruit, and it can
            extend its arm. Similar designs are used in most harvesting robots [1], as they
            have very simple kinematics.
          </p>
          <p>
            The action space is a 5-element vector of numbers between [-1,1] that specify
            the motion of each DOF (plus gripper) in the interval [-maxSpeed*dt,
            maxSpeed*dt], where maxSpeed is a parameter defined for each DOF. The
            observation space (the data received from the simulation after each timestep)
            consists of 1 RGB image, 1 depth map, 1 semantic map (each pixel has a label),
            256x256 pixels each, and the 32x32x32 semantic occupancy grid. The sensors are
            illustrated in Fig.3.
          </p>
        </div>
        <h5>
          1.2 The Simulation Environment
        </h5>
        <p>
          One of the main hurdles in the real-world application of reinforcement learning
          algorithms is sample inefficiency. It requires millions of training examples for
          a reinforcement learning algorithm to start performing well, which is
          unrealistic to acquire in a real world environment. Fortunately, the computing
          power available today allows us to simulate complex environments with
          complicated dynamics. Moreover, with the recent advancements in reinforcement
          learning, many simulation environments provide APIsthat make it easier to define
          trainable agents and extract useful observation data (i.e. MuJoCo, PyBullet,
          Gazebo, MATLAB Simulink, Unity).
        </p>
        <p>
          For this particular application, Unity was chosen for the following reasons:
          <ul>
            <li>
              Provides many off the shelf packages which makes development easier. For
              example, Obi is a package for simulating ropes and rods – very useful for
              simulating plant stems. Unity-voxel is a package that transforms meshes into
              voxelgrids – useful for creating 3D occupancy grids.
            </li>
            <li>
              ML-Agents Python API. An interface for defining agents in the simulation
              environment, sending actions and receiving observations and rewards.
            </li>
            <li>
              Very easy to train multiple agents in parallel. By simply copying the training
              environment in the same scene, many clones of the same agent can be trained
              simultaneously. Moreover, one can launch many simulations across multiple
              machines, and control them from a central client using remote requests (for
              example using (RPyC).
            </li>
            <li>
              Has a large variety of predefined simulated sensors (i.e. ray vision, RGBD
              cameras – most important for this application, Accelerometers, Pressure Sensors
              etc.). Moreover, one can define their own sensors, such as a sensor for
              retrieving an occupancy grid.

            </li>
            <li>
              Has a C# scripting API that allows to easily create many randomized environments
              based on prefabs – important for making the algorithm adaptable and transferable
              to the real world.
            </li>
            <li>
              Allows for the creation of manual controllers – important for imitation
              learning.
            </li>

          </ul>
        </p>
        <h4>2. Internal model representation and planning</h4>
        <div>
          <div>

            <div id="fig3" className="onethirdscreen">
              a)
              <img
                src={'/harvestr/fig3a.jpg'}
                style={{
                width: '100%'
              }}/>
              b)
              <img
                src={'/harvestr/fig3b.jpg'}
                style={{
                width: '100%'
              }}/>
              c)
              <img
                src={'/harvestr/fig3c.jpg'}
                style={{
                width: '100%'
              }}/>
              d)
              <img
                src={'/harvestr/fig3d.jpg'}
                style={{
                width: '100%'
              }}/>
              e)
              <img
                src={'/harvestr/fig3e.jpg'}
                style={{
                width: '100%'
              }}/>
              <div>
                <b>Fig. 3
                </b>
                &nbsp; a) the transparent cube is a grid of colliders that constructs the
                occupancy grid. b) camera view c) Depth Image d) Semantic labeling e) Occupancy
                Grid
              </div>
            </div>
          </div>

          <h5>2.1 Overview
          </h5>
          <p>
            The HarvestR architecture assumes one camera mounted above the gripper, so that
            it has a view of the area captured by the occupancy grid. When the robot is
            deployed in a physical environment, the camera data is augmented before it is
            fed into the policy network and forward model for planning. Mapping images
            directly to actions is possible, but very sample inefficient. Using only a
            convolutional neural network to map images to actions, the network would have to
            learn a 3D representation of the environment implicitly, since the actions are
            in 3D space. Instead, a better solution is using semi-supervised representation
            learning with a variational encoder to map images into a latent space that
            captures the relevant spatial information (section 2.2). This latent vector is
            then used as input to a forward model for prediction and planning (section 2.3).
          </p>
          <p>
            This latent space can easily be decoded into a semantic occupancy grid – each
            cell has an integer label (i.e. 0 – empty, 1 - leaf, 2 – stem, 3 – fruit that is
            not ripe, 4 – fruit that is ripe).
          </p>
          <p>
            This approach has many benefits:
            <ul>
              <li>
                The inference of the model from camera data can be separated from planning,
                which allows the control system to adapt across different environments.
              </li>
              <li>
                On a structural and semantic level, many plants are very similar (most have
                stems, leaves, peduncles and fruits). Using a semantically labelled occupancy
                grid allows the robot to capture this structure.
              </li>
              <li>
                It is easy to build a forward model, policy network and value function based on
                the latent representation.
              </li>
              <li>
                Easy to interpret for humans. Feeding the latent representation into the decoder
                essentially allows us to visualize in 3D what the robot is “seeing”.
              </li>

            </ul>
          </p>

        </div>

        <div style={{ display: "inline-block" }}>
          <h5>2.2 Econder-Decoder Architecture</h5>
          <p>
            First, a disentangled variational encoder [5] is implemented - very similar to
            the one used in [2], except unlike an autoencoder, the input and output are
            different. The purpose of the encoder is to create an embedding – a vector that
            contains enough information that it can be fed into the decoder, and the
            original occupancy grid could be reconstructed. This encoder takes as input a
            256x256 depth map and a 256x256 semantic label map and outputs a 32x32x32
            semantic occupancy grid (Fig. 4). All this data can be obtained from simulation
            so the training data is virtually unlimited.
          </p>
          <div id="fig5" className="halfscreen">
            <img
              src={'/harvestr/fig5.jpg'}
              style={{
              width: '100%'
            }}/>
            <div>
              <b>Fig. 5 </b>
               &nbsp; 
               Convolutional network for semantic labeling [3].
            </div>
          </div>
          <p>
            The loss function used to train the encoder is:
          </p>
          <p>FORMULA</p>
          <p>
            where  represents the parameters of the decoder,  - parameters of the encoder,
            x - input, y - output, z - latent vector. The second term in the loss function
            is a penalty for the latent vector departing from an isometric Gaussian
            distribution, which essentially forces the latent vector to retain only the
            elements that are essential. This is important, since this vector is used as
            input to the forward model, policy network and value function.
          </p>

          <h5>2.3 Forward Model</h5>
          <p>
            The function of the forward model is essentially to predict the future based on
            past experience. Formally, a forward model is a function M parametrized by  ,
            such that
          </p>
          <p>FORMULA</p>
          <p>
            t s is a concatenation of the latent vector from the encoder (128 elements) with
            the joint positions of the robot (5 elements). t a is a 5 element vector with
            actions for each joint. The input to the forward model therefore is a 138
            element vector. t 1 s  is a concatenation between the latent vector and the
            joint positions at t 1. The forward model is implemented as a feed-forward
            neural network.
          </p>

          <h5>2.4 Planning</h5>
          <p>
            The joint positions are appended to the latent vector and the resulting vector
            is fed into the policy network and 5 actions are sampled. These actions are
            concatenated with t s and fed into the forward model to generate 5 potential t 1
            s  . This process is iterated 5 times until 3125 potential t 5 s  states are
            acquired. The value function is used to select the top 5 states. The rest are
            discarded. This process is iterated 10 times until t 50 s  is reached. The
            value function is used to pick the top state and the trajectory s a s a s a a s
            t t t t t t t t , , , , , ,......., ,       1 1 2 2 49 50  is given to
            the controller to follow. The robot follows the given trajectory until exp | z |
            ected observed t t   z  or the trajectory has been completed. t z is the
            latent vector at time t.

          </p>
          <div id="fig4">
            <img
              src={'/harvestr/fig4.jpg'}
              style={{
              width: '100%'
            }}/>
            <div>
              <b>Fig. 5 </b>
               &nbsp; 
               Encoder-decoder architecture and planning based on latent representation
            </div>
          </div>
        </div>
        <h4>3. Control</h4>
        <p>
          At the highest level, the control loop is essentially a state machine (Fig. 6)
          The states colored in blue use policies obtained through reinforcement learning
          for control. These states have their own policy network, reward functions, and
          value functions associated with them.
          <ul>

            <li>
              “Find Fruit” uses semantic labeling on camera images to find the nearest ripe
              fruit. Once a fruit is found, control is passed to “Get Close”.
            </li>
            <li>
              “Get Close” simply moves the robot towards the target fruit, once the target
              fruit is in the range of the occupancy grid, control is passed to “move and
              cut”.
            </li>
            <li>
              “Move and cut” uses a trained policy, value function and the forward model to
              generate trajectories towards accomplishing its goal – getting the gripper
              around the peduncle of the target fruit, cutting it and holding it. Once this is
              accomplished or interrupted, control is passed to “check status”.
            </li>
            <li>
              “Check status” has no control over the joints. It simply assesses the situation
              and moves to the appropriate state. If all is good and the fruit is held by the
              gripper, control is passed to “Move and drop”.
            </li>
            <li>
              “Move and drop” uses a policy network, a value function and a forward model to
              generate trajectories towards accomplishing its goal: getting the fruit in the
              basket. If the fruit reaches the basket, the control loop starts over, if not,
              control is passed to “check status”.
            </li>
          </ul>
        </p>
          <div id="fig6">
            <img
              src={'/harvestr/fig6.jpg'}
              style={{
              width: '100%'
            }}/>
            <div>
              <b>Fig. 6 </b>
               &nbsp; 
               Control loop
            </div>
          </div>

        <h4>4. Training</h4>
        <h5>4.1 Pretraining</h5>
        <p>
          Since training the policy and value function is dependent on the encoder, the
          segmentation convolutional net and the forward model, these need to be trained
          first. For that purpose, many environments with different numbers and placements
          of plants, different lighting conditions and textures are defined. The robot is
          programmed to move around somewhat randomly. All the observations and actions
          are stored in a buffer and the parameters of the encoder, forward model and
          segmentation convolutional net are updated offline based on this data.
        </p>
        <p>
          Next, the policy and value function of “move and cut” and “move and drop” are
          initialized.
        </p>
        <p>
          For “move and cut”, simple environments (with no overlapping stems) are
          generated, and a path planning program is written to guide the gripper towards
          the peduncle and cut it, while the observations, actions and rewards are
          recorded and used to update the policy network and value function. This is
          essentially done to give the robot a “head start” and to help it “understand”
          that, for example, the gripper being around the peduncle of the target fruit is
          a highly desirable position, while a collision with a stem or a leaf is
          undesirable.
        </p>
        <p>
          Similarly, for “move and drop”, environments are generated programmatically, the
          robot is initialized with a fruit in its gripper and a program is written to
          guide the robot towards the basket and drop the fruit, while the observations
          and actions are stored into a buffer and used to update the policy network,
          value function and forward model.
        </p>
        <p>
          After the initialization is done, it’s time to move to actual training.
          Environments are generated procedurally with randomization across multiple
          parameters such as the starting position of the robot, number, positions, sizes
          of plants, lighting conditions, textures etc. Trajectories and camera data are
          saved for every time step and later used for updating the encoder, forward model
          and the segmentation convolutional neural net. After these updates have been
          made, the data is discarded.

        </p>

        <h5>
          A few words about Unity and the training setup:
        </h5>
        <p>
          For the Unity ML-agents python API, a gym-like wrapper, UnityEnvWrapper, was
          implemented in order to make it easier to interact with agents. In Unity it is
          possible to create as many training environments as you want just by
          instantiating a prefab environment in the same scene multiple times (Fig. 7),
          and when env.step() is called, it returns a list of the agents that are waiting
          for an action, together with their observations and rewards. Unity ML-agents is
          a package that facilitates the use of Unity as a Reinforcement Learning
          framework. It provides an Agent interface, which allows the user to define the
          reward function, the observations collected at each step, the action space, how
          the robot responds to each action, and other useful features.
        </p>
        <p>
          A big hurdle was finding a good way to simulate the dynamics of plants, in
          particular the movement of a plant stem when it is pushed around by the robot.
        </p>
        <p>
          Experiments were performed with various designs based on chains of rigid bodies
          connected with hinge joints, spring joints, custom joints etc. but to no avail.
          They all resulted in either very unrealistic, stiff motion, or jittering and
          instability on interaction, especially as the number of objects increased.
          Thankfully there is a package called Obi, which defines ropes and rods with
          adjustable rigidity, springiness, bending, stretching, tearing etc. With Obi
          rods it was possible to create a plant that behaves realistically in simulation.
        </p>
        <p>
          Another package used in this implementation is ImageSynthesis. This package
          provides a very simple API for retrieving camera data together with depth maps
          and semantic labels.

        </p>
        <h4>Conclusion</h4>
        <p>
          Despite the immense progress in Reinforcement Learning and Machine Learning in
          general, a seemingly simple task such as fruit picking still remains elusive.
          This paper discussed why that is the case and proposed HarvestR – a control
          system for harvesting robots based on deep reinforcement learning. At the heart
          of HarvestR is a disentangled encoder that learns an embedding that captures the
          relevant semantic data and spatial structure of a scene in a form that is easy
          to feed into a state of the art RL algorithm such as PPO. The power of PPO is
          increased by the use of a forward model for look-ahead .
        </p>

        <h4>Bibliography</h4>
        [1] Bac, C. Wouter, Eldert J. van Henten, Jochen Hemming, and Yael Edan.
        “Harvesting Robots for High-Value Crops: State-of-the-Art Review and Challenges
        Ahead: Harvesting Robots for High-Value Crops: State-of-the-Art Review and
        Challenges Ahead.” Journal of Field Robotics 31, no. 6 (November 2014): 888–911.
        https://doi.org/10.1002/rob.21525.
        <br/>
        [2] Schönberger, Johannes L., Marc Pollefeys, Andreas Geiger, and Torsten
        Sattler. “Semantic Visual Localization.” ArXiv:1712.05773 [Cs], April 16, 2018.
        http://arxiv.org/abs/1712.05773.
        <br/>
        [3] Long, Jonathan, Evan Shelhamer, and Trevor Darrell. “Fully Convolutional
        Networks for Semantic Segmentation.” ArXiv:1411.4038 [Cs], March 8, 2015.
        http://arxiv.org/abs/1411.4038.
        <br/>
        [4] sagieppel. “Semantic Segmentation with Fully Convolutional Neural Network
        (FCN) Pytorch Implementation.” github, n.d.
        https://github.com/sagieppel/Fully-convolutional-neural-network-FCNfor-semantic-segmentation-with-pytorch.
        <br/>
        [5] Higgins, Irina, Loic Matthey, Xavier Glorot, Arka Pal, Benigno Uria, Charles
        Blundell, Shakir Mohamed, and Alexander Lerchner. “Early Visual Concept Learning
        with Unsupervised Deep Learning.” ArXiv:1606.05579 [Cs, q-Bio, Stat], September
        20, 2016. http://arxiv.org/abs/1606.05579.
      </div>
    )
  }
}