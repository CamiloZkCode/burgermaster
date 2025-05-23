const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
const { name, email, message } = req.body;

 if (!name || !email || !message)
 {
    return res.status(400).json({ message: "Todos los campos son obligatorios." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = { replyTo:email,
    to:process.env.EMAIL_USER,
    from: `"Formulario Web - ${name}" <${process.env.EMAIL_USER}>`,
subject: `Nuevo mensaje desde tu sitio web de ${name}`,
text: `📩 Nuevo mensaje desde el formulario de contacto:

👤 Nombre: ${name}
✉️ Correo del cliente: ${email}
📝 Mensaje: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Mensaje enviado correctamente." });
  } catch (error) {
    console.error(" Error al enviar correo:", error);
    res.status(500).json({ message: "Error al enviar mensaje.", error: error.message });
  }
});

app.listen(3000, () => {
  console.log(" Servidor backend corriendo en http://localhost:3000");
});