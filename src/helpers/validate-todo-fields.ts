export function validateInputsTitleAndDescription(
  title: string | undefined,
  description: string | undefined
): string | null {
  if (!title || !description) {
    return 'Please fill out both title and description fields.';
  }

  if (title.length > 30) {
    return 'The title cannot be longer than 50 characters.';
  }

  if (description.length > 250) {
    return 'The description cannot be longer than 250 characters.';
  }

  return null;
}
