import styled from 'styled-components';

export const PageSvg = styled.svg`
  display: block;
  position: relative;
  margin: 6em auto 0 auto;
  padding: 10px;
  transform-origin: bottom;
  transform: rotate(0deg) translate3d(0px, 0px, 0px);
  animation: move 2s ease infinite;

  @keyframes move {
    0%,
    100% {
      transform: rotate(0deg) translate3d(0px, 0px, 0px);
    }
    25% {
      transform: rotate(5deg) translate3d(5px, 5px, 0px);
    }
    75% {
      transform: rotate(-6deg) translate3d(-5px, 5px, 0px);
    }
  }

  g#head {
    transform: rotate(0deg) translate3d(0px, 0px, 0px);
    transform-origin: bottom center;
    animation: head 1s 1s ease infinite;
    #leftAntenna,
    #rightAntenna {
      > ellipse {
        animation: color 350ms linear infinite;
      }
    }
  }

  @keyframes head {
    0%,
    46%,
    50%,
    55%,
    100% {
      transform: rotate(0deg) translate3d(0px, 0px, 0px);
    }
    49% {
      transform: rotate(20deg) translate3d(0px, 0px, 0px);
    }
    51% {
      transform: rotate(-10deg) translate3d(0px, 0px, 0px);
    }
  }

  @keyframes color {
    0%,
    100% {
      fill: #ccc;
    }
    50% {
      fill: rgb(255, 0, 0);
    }
  }

  #upperTorso {
    transform: rotate(0deg);
    transform-origin: center;
    animation: torso 600ms 1s ease infinite;
    #leftArm {
      transform: rotate(0deg);
      transform-origin: 80% 5%;
      animation: left 1s ease infinite;
      .forearm {
        transform: rotate(0deg);
        transform-origin: 68% 10%;
        animation: forearm 800ms 1s ease infinite;
      }
    }
    #rightArm {
      transform: rotate(0deg);
      transform-origin: 18% 0%;
      animation: right 1s ease infinite;
      .forearm {
        transform: rotate(0deg);
        transform-origin: 68% 10%;
        animation: forearm 700ms 1s ease infinite;
      }
    }
  }

  @keyframes torso {
    40%,
    50%,
    60% {
      transform: rotate(0deg);
    }
    45% {
      transform: rotate(5deg);
    }
    55% {
      transform: rotate(-5deg);
    }
  }

  @keyframes left {
    60% {
      transform: rotate(100deg);
    }
  }

  @keyframes right {
    50% {
      transform: rotate(-70deg);
    }
  }

  @keyframes forearm {
    0%,
    30%,
    50%,
    70%,
    100% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(25deg);
    }
    60% {
      transform: rotate(-25deg);
    }
  }

  #lowerTrunk {
    transform: rotate(0deg);
    transform-origin: 60% 5%;
    animation: lowerTrunk 1s ease infinite;
  }

  @keyframes lowerTrunk {
    0%,
    100% {
      transform: rotate(0deg) translate3d(0px, 0px, 0px);
    }
    25% {
      transform: rotate(2deg) translate3d(2px, 0px, 0px);
    }
    75% {
      transform: rotate(-2deg) translate3d(-2px, 0px, 0px);
    }
  }

  #leftFoot {
    transform: rotate(0deg);
    transform-origin: 60% 5%;
    animation: leftFoot 2s ease infinite;
    > .lowerLeg {
      transform: rotate(0deg);
      transform-origin: 68% 10%;
      animation: lowerLeg 2s ease infinite;
    }
  }

  @keyframes leftFoot {
    0%,
    50% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(70deg);
    }
  }

  @keyframes lowerLeg {
    0%,
    50% {
      transform: rotate(0deg);
    }
    8%,
    14% {
      transform: rotate(-15deg);
    }
    11%,
    18% {
      transform: rotate(15deg);
    }
  }

  #rightFoot {
    transform: rotate(0deg);
    transform-origin: 50% 5%;
    animation: rightFoot 2s ease infinite;
    > .lowerLeg {
      transform: rotate(0deg);
      transform-origin: 68% 10%;
      animation: lowerLegIz 2s ease infinite;
    }
  }

  @keyframes rightFoot {
    75% {
      transform: rotate(-60deg);
    }
    50%,
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes lowerLegIz {
    50%,
    100% {
      transform: rotate(0deg);
    }
    60%,
    70% {
      transform: rotate(15deg);
    }
    65%,
    85% {
      transform: rotate(-15deg);
    }
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body {
    background: #404853;
    font-family: 'Roboto Condensed', sans-serif;
  }

  .col {
    text-align: center;
    h1 {
      text-shadow: 0 3px 0px #404853, 0 6px 0px #333;
      color: #f54f59;
      font-size: 6em;
      font-weight: 700;
      line-height: 0.6em;
    }
    p {
      color: #ccc;
      font-family: monospace;
      font-size: 0.95em;
      font-weight: 300;
      line-height: 7em;
    }
  }
`;
