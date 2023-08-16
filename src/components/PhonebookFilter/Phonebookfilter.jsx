import {
  FilterField,
  StyledFilter,
  StyledFilterLabel,
} from './PhonebookFilter.styled';

export const ContactsFilter = ({ filter, onFilterChange }) => {
  const handleFilterChange = event => {
    const { value } = event.target;
    onFilterChange(value);
  };

  return (
    <StyledFilter>
      <StyledFilterLabel>
        Filter contacts by name:
        <FilterField type="text" value={filter} onChange={handleFilterChange} />
      </StyledFilterLabel>
    </StyledFilter>
  );
};
