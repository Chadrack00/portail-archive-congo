export const getVerificationEmailTemplate = (
  url: string,
  userName?: string
) => {
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Vérification de votre email</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
      <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 20px 0; text-align: center;">
            <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <!-- Header -->
              <tr>
                <td style="padding: 40px 30px 20px; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px 8px 0 0;">
                  <table role="presentation" style="margin: 0 auto;">
                    <tr>
                      <td style="background-color: rgba(255,255,255,0.2); width: 60px; height: 60px; border-radius: 50%; text-align: center; vertical-align: middle;">
                        <span style="font-size: 30px;">✉️</span>
                      </td>
                    </tr>
                  </table>
                  <h1 style="color: #ffffff; margin: 20px 0 0; font-size: 24px; font-weight: 600;">Vérifiez votre email</h1>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 30px;">
                  ${
                    userName
                      ? `<p style="font-size: 16px; color: #333333; margin: 0 0 20px;">Bonjour ${userName},</p>`
                      : '<p style="font-size: 16px; color: #333333; margin: 0 0 20px;">Bonjour,</p>'
                  }
                  <p style="font-size: 16px; color: #666666; line-height: 1.6; margin: 0 0 20px;">
                    Merci de vous être inscrit ! Pour activer votre compte, veuillez confirmer votre adresse email en cliquant sur le bouton ci-dessous.
                  </p>
                  
                  <!-- CTA Button -->
                  <table role="presentation" style="margin: 30px auto;">
                    <tr>
                      <td style="text-align: center;">
                        <a href="${url}" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; text-align: center;">
                          Vérifier mon email
                        </a>
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Alternative Link -->
                  <p style="font-size: 14px; color: #999999; line-height: 1.6; margin: 20px 0 0;">
                    Si le bouton ne fonctionne pas, copiez et collez ce lien dans votre navigateur :
                  </p>
                  <p style="font-size: 12px; color: #667eea; word-break: break-all; margin: 10px 0; padding: 10px; background-color: #f9f9f9; border-radius: 4px;">
                    ${url}
                  </p>
                  
                  <p style="font-size: 14px; color: #999999; line-height: 1.6; margin: 30px 0 0;">
                    Ce lien expirera dans <strong style="color: #666666;">5 heures</strong>.
                  </p>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="padding: 20px 30px; background-color: #f9f9f9; border-radius: 0 0 8px 8px; text-align: center;">
                  <p style="font-size: 12px; color: #999999; margin: 0;">
                    Si vous n'avez pas créé de compte, vous pouvez ignorer cet email.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};
