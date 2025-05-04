const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Servidor para enviar correos
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(5000, () => console.log("Server Running"));

// Configuración para Hotmail/Outlook
const contactEmail = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // Use TLS, no conexión SSL directa
  auth: {
    user: "wilfri_corrales@hotmail.com",  // Cambia este valor por tu cuenta de Hotmail
    pass: "24895027wp"           // Cambia este valor por tu contraseña de Hotmail
  },
  tls: {
    ciphers: "SSLv3"
  }
});

// Verificar la conexión del servicio de correo
contactEmail.verify((error) => {
  if (error) {
    console.error("Error: ", error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: name,
    to: "tu_cuenta@hotmail.com", // Puedes enviar el correo a ti mismo o a otro destinatario
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
      res.json(error);
    } else {
      console.log("Message sent: ", info);
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

