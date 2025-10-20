import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect } from 'react';

interface CanvasConfiguratorProps {
  toneMapping?: THREE.ToneMapping;
  outputColorSpace?: THREE.ColorSpace;
}

const CanvasConfigurator: React.FC<CanvasConfiguratorProps> = ({
  toneMapping = THREE.ACESFilmicToneMapping,
  outputColorSpace = THREE.SRGBColorSpace,
}) => {
  const { gl } = useThree();

  useEffect(() => {
    gl.toneMapping = toneMapping;
    gl.outputColorSpace = outputColorSpace;
    // Invalidate to ensure the changes are picked up by the renderer
    // gl.setAnimationLoop(null); // This line is not needed and can cause issues
    // gl.render(gl.scene, gl.camera); // This line is not needed and can cause issues
  }, [gl, toneMapping, outputColorSpace]);

  return null;
};

export default CanvasConfigurator;