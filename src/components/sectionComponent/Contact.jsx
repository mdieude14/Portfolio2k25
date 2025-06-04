import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Description = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FormContainer = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

//template_agvqx44

//service_ld7z4dj

//M5NFzf-8CjZpvDe_b

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          setLoading(false);
          alert("Merci pour votre message");
          setForm({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("Erreur:", error);
          alert("Une erreur est survenue, veuillez réessayer");
        }
      );
  };

  return (
    <ContactWrapper id="Contact">
      <Wrapper>
        <Title>Contact</Title>
        <Description style={{ marginBottom: "40px" }}>
          Prenez contact avec moi via ce formulaire pour discuter de votre
          projet ou autres je serais ravi de vous aider. Et d'y répondre dans
          les plus brefs délais.
        </Description>
        <FormContainer
          as="form"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <ContactInput
            placeholder="Entrez votre nom"
            name="from_name"
            value={form.from_name}
            onChange={handleChange}
            required
          />
          <ContactInput
            placeholder="Entrez votre email"
            name="from_email"
            type="email"
            value={form.from_email}
            onChange={handleChange}
            required
          />
          <ContactInputMessage
            placeholder="écrivez votre message ici"
            name="message"
            rows={7}
            value={form.message}
            onChange={handleChange}
            required
          />
          <ContactButton 
            type="submit" 
            value={loading ? "Envoi en cours..." : "Envoyer"}
            disabled={loading}
          />
        </FormContainer>
      </Wrapper>
    </ContactWrapper>
  );
};
export default Contact;
