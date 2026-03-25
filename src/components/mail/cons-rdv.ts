export function getPatientRappelEmailTemplate(
  patientName: string,
  medecinName: string,
  date_rdv: Date,
) {
  const dateStr = date_rdv.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 8px; padding: 20px;">
      <h2 style="color: #0056b3; text-align: center;">Rappel de rendez-vous médical</h2>
      <p>Bonjour <strong>${patientName}</strong>,</p>
      <p>Votre médecin, le <strong>${medecinName}</strong>, souhaite vous rappeler que vous avez un rendez-vous prévu pour le :</p>
      <div style="background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 1.2em; font-weight: bold; border-radius: 5px; margin: 20px 0;">
        ${dateStr}
      </div>
      <p>Merci de prendre les dispositions nécessaires pour être présent(e).</p>
      <p>Si vous avez des questions ou un empêchement, n'hésitez pas à nous contacter.</p>
      <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
      <p style="font-size: 0.9em; color: #777; text-align: center;">Cordialement,<br />L'équipe de Santé Connect</p>
    </div>
  `;
}

export function getStatusChangeEmailTemplate(
  patientName: string,
  medecinName: string,
  newStatus: string,
) {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 8px; padding: 20px;">
      <h2 style="color: #0056b3; text-align: center;">Mise à jour de votre rendez-vous</h2>
      <p>Bonjour <strong>${patientName}</strong>,</p>
      <p>Le <strong>${medecinName}</strong> a mis à jour le statut de votre rendez-vous.</p>
      <p>Nouveau statut : <span style="font-weight: bold; color: #0056b3;">${newStatus}</span></p>
      <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
      <p style="font-size: 0.9em; color: #777; text-align: center;">Cordialement,<br />L'équipe de Santé Connect</p>
    </div>
  `;
}

export function getInvitationEmailTemplate(
  patientName: string,
  medecinName: string,
  message: string,
) {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #eaeaea; border-radius: 8px; padding: 20px;">
      <h2 style="color: #0056b3; text-align: center;">Invitation à un rendez-vous</h2>
      <p>Bonjour <strong>${patientName}</strong>,</p>
      <p>Le <strong>${medecinName}</strong> souhaite vous inviter à prendre un rendez-vous :</p>
      <blockquote style="border-left: 4px solid #0056b3; padding-left: 10px; margin: 20px 0; font-style: italic; color: #555;">
        ${message.replace(/\n/g, "<br />")}
      </blockquote>
      <p>Veuillez vous connecter à votre espace pour proposer une date.</p>
      <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
      <p style="font-size: 0.9em; color: #777; text-align: center;">Cordialement,<br />L'équipe de Santé Connect</p>
    </div>
  `;
}
