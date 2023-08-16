import {
  Alert,
  StyledDeleteBtn,
  StyledItem,
  StyledList,
} from './PhonebookList.styled';

export const PhonebookList = ({ contacts, deleteContact }) => {
  return (
    <StyledList>
      {contacts.length > 0 ? (
        contacts.map(contact => (
          <StyledItem key={contact.id}>
            {contact.name}: {contact.number}
            <StyledDeleteBtn
              type="submit"
              onClick={() => {
                deleteContact(contact.id);
              }}
            >
              Delete
            </StyledDeleteBtn>
          </StyledItem>
        ))
      ) : (
        <Alert>No contacts available.</Alert>
      )}
    </StyledList>
  );
};
