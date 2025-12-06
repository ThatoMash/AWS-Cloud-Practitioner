# AWS Identity and Access Management (IAM)

This section focuses on managing access to AWS services and resources securely.
It covers the core components of identities, permissions, and best practices for securing your account.

---

## 1. AWS IAM Overview
AWS Identity and Access Management (IAM) is the central service for controlling access to AWS resources.
It allows you to create and manage distinct identities—such as Users for individuals, 
Groups for collections of users with shared permissions, and Roles for temporary access permissions—ensuring that the right entities have the right access.

<img width="1920" height="1080" alt="#1 AWS IAM" src="https://github.com/user-attachments/assets/65bbc521-1ce6-4b6b-ad0b-9a086a1530cd" />


## 2. Anatomy of an IAM Policy
IAM permissions are defined in documents called Policies, which are written in JSON format. 
These documents specify exactly what actions are allowed or denied on specific resources,
using key elements such as the "Effect," "Action," and "Resource" to construct precise permission rules.


<img width="1920" height="1080" alt="#2 Anatomy of IAM" src="https://github.com/user-attachments/assets/0b56c061-f879-493f-bc6a-3ff4b387ef97" />


## 3. The AWS Account Root User
The Root User is the initial identity created when you first set up an AWS account. 
It possesses complete, unrestricted access to all services and resources. Certain administrative tasks,
such as closing the account or changing the AWS Support plan, can *only* be performed by this user.


<img width="1920" height="1080" alt="#3 AWS Account Root User" src="https://github.com/user-attachments/assets/a9b816df-9b02-455e-bfad-b151af832c41" />


## 4. Multi-Factor Authentication (MFA)
MFA provides an essential layer of security by requiring more than just a password to sign in.
It mandates a second form of verification—typically a code from a mobile device—to confirm identity,
significantly protecting the account against compromised passwords.


<img width="1920" height="1080" alt="#4 Multi-Factor-Authentication" src="https://github.com/user-attachments/assets/880e2f4b-f527-45fc-ab34-7f321b10acee" />


## 5. Principle of Least Privilege (PoLP)
A fundamental security best practice is the Principle of Least Privilege. 
This concept dictates that a user, role, or application should be granted only the minimum permissions necessary to perform its specific task,
rather than broad access, to minimize security risks.


<img width="1920" height="1080" alt="#5 Principle of Least Privilege" src="https://github.com/user-attachments/assets/a8141694-5d5d-4d12-9a4a-3fdd24eb8ebb" />

---

## Conclusion
Mastering IAM is the first step in securing any AWS environment. By understanding the distinction between the Root User and IAM identities, implementing strong Policies, enforcing MFA, and adhering to the Principle of Least Privilege, you create a robust security boundary around your cloud infrastructure.
