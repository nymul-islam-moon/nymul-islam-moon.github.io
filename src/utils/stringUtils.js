export const formatCategoryName = (category) => {
  if (category === 'all') return 'All';
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
