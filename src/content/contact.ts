export const contactPage = {
  title: "Contact Us",
  description: "Get in touch with our team to discuss how we can help transform your satellite communication capabilities."
};

export const contactInfo = {
  title: "Get in Touch",
  items: [
    {
      icon: "Mail",
      title: "Email",
      content: "contact@spacecomm.com"
    },
    {
      icon: "Phone",
      title: "Phone",
      content: "+34 123 456 789"
    },
    {
      icon: "MapPin",
      title: "Location",
      content: "Universidad de Málaga\nMálaga, Spain"
    }
  ]
};

export const contactForm = {
  fields: [
    {
      id: "name",
      label: "Name",
      type: "text",
      required: true
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      required: true
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      required: true
    },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      required: true,
      rows: 4
    }
  ],
  submitButton: "Send Message"
};
