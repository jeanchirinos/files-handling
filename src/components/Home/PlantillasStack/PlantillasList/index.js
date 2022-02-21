import usePlantillas from '@/hooks/usePlantillas';
import Plantilla from './Plantilla';
import DeleteButton from './DeleteButton';

export default function PlantillasList() {
  const { _plantillasStack } = usePlantillas();

  return (
    <>
      {_plantillasStack.map((plantilla, index) => (
        <div key={index} style={{ position: 'relative' }}>
          <Plantilla plantilla={plantilla} />
          <DeleteButton plantilla={plantilla} />
        </div>
      ))}
    </>
  );
}
