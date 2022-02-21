import { closeOptions } from '../../functions';

export default function Plantilla({ plantilla }) {
  function showOptions(e, plantillaName) {
    e.preventDefault();
    closeOptions();

    const plantillaSelected = document.getElementById(plantillaName).classList;
    plantillaSelected.toggle('selected');
  }

  return (
    <p
      className="small light"
      onContextMenu={(e) => showOptions(e, plantilla.name)}
    >
      {plantilla.name}
    </p>
  );
}
