export function closeContextMenu() {
  const plantillaPreviouslySelected = document.querySelector('.selected');
  plantillaPreviouslySelected?.classList.toggle('selected');
}
