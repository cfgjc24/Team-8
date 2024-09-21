from email.mime.text import MIMEText
import smtplib


SEND_EMAIL = False  # Change to True to enable actual email sending for non profit

def send_admin_notification(subject, body):
    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = 'your_email@example.com'
    msg['To'] = 'admin@example.com'
    
    if SEND_EMAIL:
        try:
            with smtplib.SMTP('smtp.gmail.com', 587) as server:
                server.starttls()
                server.login('your_email@example.com', 'your_password')
                server.sendmail('your_email@example.com', 'admin@example.com', msg.as_string())
                print("Email sent successfully!")
        except Exception as e:
            print(f"Failed to send email: {e}")
    else:
        # Mock sending the email
        print(f"Mock email would be sent!")
        print(f"Subject: {msg['Subject']}")
        print(f"From: {msg['From']}")
        print(f"To: {msg['To']}")
        print(f"Body: {body}")

# Example usage:
send_admin_notification("New Student Added", "A new student has been successfully added to the database.")
