import { closeContextMenu } from '../../functions';

export default function Plantilla({ name }) {
  function toggleDeleteButton(e) {
    e.preventDefault();
    closeContextMenu();

    const plantillaSelected = document.getElementById(name);
    plantillaSelected?.classList.toggle('selected');
  }

  return (
    <p className="small light" onContextMenu={(e) => toggleDeleteButton(e)}>
      {name}
    </p>
  );
}
