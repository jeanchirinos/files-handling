export function closeOptions() {
  const plantillaPreviouslySelected =
    document.querySelector('.selected')?.classList;

  plantillaPreviouslySelected?.toggle('selected');
}
