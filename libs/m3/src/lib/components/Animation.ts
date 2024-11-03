import { styled, keyframes } from '@mui/material/styles';
import { Paper, PaperProps } from '@mui/material';

export const revealUpAnimationKFrames = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  50% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const RevealUpPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  animation: `${revealUpAnimationKFrames} ${theme.motion.duration.medium4} ${theme.motion.easing.standard.accelerate}`,
  animationFillMode: 'forwards',
}));
