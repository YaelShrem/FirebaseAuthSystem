import { ChangeEvent, FormEvent, useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import { verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";

const defaultFormFields = {
  password: '',
  confirmPassword: '',
}

const PasswordReset = () => {
  return (
    <div>PasswordReset</div>
  )
}

export default PasswordReset

function handleResetPassword(auth :any, actionCode :any, continueUrl :any, lang :any) {
  // Localize the UI to the selected language as determined by the lang
  // parameter.

  // Verify the password reset code is valid.
  verifyPasswordResetCode(auth, actionCode).then((email) => {
    const accountEmail = email;

    // TODO: Show the reset screen with the user's email and ask the user for
    // the new password.
    const newPassword = "...";

    // Save the new password.
    confirmPasswordReset(auth, actionCode, newPassword).then((resp:any) => {
      // Password reset has been confirmed and new password updated.

      // TODO: Display a link back to the app, or sign-in the user directly
      // if the page belongs to the same domain as the app:
      // auth.signInWithEmailAndPassword(accountEmail, newPassword);

      // TODO: If a continue URL is available, display a button which on
      // click redirects the user back to the app via continueUrl with
      // additional state determined from that URL's parameters.
    }).catch((error) => {
      // Error occurred during confirmation. The code might have expired or the
      // password is too weak.
    });
  }).catch((error) => {
    // Invalid or expired action code. Ask user to try to reset the password
    // again.
  });
}