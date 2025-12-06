<img width="849" height="478" alt="image" src="https://github.com/user-attachments/assets/0468f80a-b2fe-459a-9a5b-440782650bdc" /># AWS Identity and Access Management (IAM) Study Notes

## Introduction to IAM
AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources. It allows you to centrally manage permissions, controlling which users are authenticated (signed in) and authorized (have permissions) to use resources.


<img width="854" height="435" alt="image" src="https://github.com/user-attachments/assets/baff1911-4398-494a-92c3-a20658ba5fef" />


---

## IAM Core Elements
### Principals
A **Principal** is any entity that can make a request for an action or operation on an AWS resource. This includes:
* Users
* Roles
* Federated Users
* Applications
* The Root User (your first principal)


<img width="846" height="443" alt="image" src="https://github.com/user-attachments/assets/c6e945be-013f-43ec-8b66-9872034a4368" />


### The Request Flow
When a principal interacts with AWS, they send a **Request**. This request must pass through two main checks:
1.  **Authentication:** Verifying the identity (Who is this?).
2.  **Authorization:** Verifying permissions (Can they do this?).


<img width="848" height="435" alt="image" src="https://github.com/user-attachments/assets/60022a40-0757-4012-a713-c9c47638288a" />

---

## Authentication vs. Authorization

### Authentication
Authentication is the process of verifying identity.
* **Console Access:** Verified via Username and Password.
* **API/CLI Access:** Verified via Access Keys and Secret Keys.


<img width="854" height="487" alt="image" src="https://github.com/user-attachments/assets/b1c4240f-80dc-4ba3-8f91-e14a5ceed171" />


### Authorization
Authorization determines what actions a user is allowed to perform based on assigned permissions or policies. AWS checks the request context against policies to decide whether to **Allow** or **Deny** the request.


<img width="853" height="448" alt="image" src="https://github.com/user-attachments/assets/ac4bac2c-c622-4308-9679-3da2327a4822" />
<img width="850" height="448" alt="image" src="https://github.com/user-attachments/assets/763228a9-4728-4cf7-a7ab-f201815b2699" />
<img width="853" height="446" alt="image" src="https://github.com/user-attachments/assets/996d7842-9808-4126-b871-73a11f4811f6" />

---

## IAM Identities

### 1. The Root Account
The root user is created when the AWS account is first set up. It has full access to all resources and should be secured immediately.

<img width="850" height="445" alt="image" src="https://github.com/user-attachments/assets/717e9c95-d01b-49d9-a066-0737ea72d84e" />



### 2. IAM Users
An IAM User represents a specific person or application. They have permanent, long-term credentials and interact directly with AWS services.

<img width="850" height="445" alt="image" src="https://github.com/user-attachments/assets/ad336bfe-d32e-4a3b-8749-087488d89e09" />



### 3. IAM Groups
An IAM Group is a collection of IAM users. Using groups allows you to specify permissions for multiple users at once, making management much easier.


<img width="850" height="441" alt="image" src="https://github.com/user-attachments/assets/7e4f5e10-50d9-4b2d-82fe-fe0987947bd4" />


### 4. IAM Roles
An IAM Role does **not** have permanent credentials (like a password). Instead, it is meant to be **assumed** by authorized entities, such as IAM users, applications, or AWS services (like EC2 instances).


<img width="850" height="447" alt="image" src="https://github.com/user-attachments/assets/42833be2-f739-4620-9f8f-623a2c8a6569" />

---

## Policies and Permissions
IAM policies are JSON documents that define permissions. They generally follow the **Least Privilege Principle**, meaning you should only grant the permissions a user specifically needs.
* **Effect:** Allow or Deny
* **Action:** The specific API call (e.g., `s3:ListBucket`)
* **Resource:** The specific object affected


<img width="850" height="405" alt="image" src="https://github.com/user-attachments/assets/32913cf5-eb23-4f58-bd21-91c35b897fca" />


### Policy Inheritance
Permissions can be applied via groups. Users inherit the permissions attached to the groups they belong to.


<img width="848" height="450" alt="image" src="https://github.com/user-attachments/assets/05d4e4e8-946d-494c-a6df-5d8958ebe36a" />
<img width="855" height="470" alt="image" src="https://github.com/user-attachments/assets/ac99c7f3-c924-4f11-a870-59d5ee016324" />

---

## Access Methods
Users can access AWS in three ways:

1.  **AWS Management Console:** Protected by Password + MFA.
2.  **AWS CLI (Command Line Interface):** A tool to interact with AWS services using commands in your command-line shell. Protected by Access Keys.
3.  **AWS SDK (Software Development Kit):** Language-specific APIs (e.g., Python, Java) used within applications. Protected by Access Keys.

![How Users Access AWS.jpg](How_Users_Access_AWS.jpg)

<img width="853" height="474" alt="image" src="https://github.com/user-attachments/assets/58a95aea-8c37-4d29-a42e-52c7ed3e30d5" />

<img width="850" height="451" alt="image" src="https://github.com/user-attachments/assets/7eac183c-a46f-4f5b-bb8c-75dc036a1a51" />

<img width="853" height="454" alt="image" src="https://github.com/user-attachments/assets/a00c81d3-6443-41ec-8432-c2aa98e4e374" />


---

## Security Tools & Best Practices

### Securing the Account
* **Password Policy:** Enforce minimum length, specific characters, and password expiration/rotation.
* **Multi-Factor Authentication (MFA):** Adds a layer of security by requiring a password (what you know) plus a security device (what you own).

![MFA and Password Policy.jpg](MFA_and_Password_Policy.jpg)

<img width="849" height="454" alt="image" src="https://github.com/user-attachments/assets/03f79c7e-987f-4f3c-af28-ee8a0fb010a1" />


### Auditing Tools
* **IAM Credentials Report:** An account-level report that lists all users and the status of their credentials.
* **IAM Access Advisor:** A user-level tool that shows which service permissions a user has actually used and when.


<img width="851" height="475" alt="image" src="https://github.com/user-attachments/assets/f42b8620-3779-4e9e-9e96-a625c1404130" />


### Summary of Guidelines
* Don't use the root account for daily tasks.
* One physical user = One AWS user.
* Assign permissions to Groups, not individual users.
* Enable MFA on all accounts.
* Rotate credentials regularly.
* Never share Access Keys.



<img width="849" height="478" alt="image" src="https://github.com/user-attachments/assets/f866ee26-d501-42b6-8e52-b878db976e4a" />


---

## Shared Responsibility Model
Security is a shared responsibility between AWS and the customer:
* **AWS Responsibility:** Securing the infrastructure (global network, hardware, physical security).
* **Customer Responsibility:** User management, password policies, MFA, data encryption, and rotating keys.

![Shared Responsibility Model.jpg](Shared_Responsibility_Model.jpg)

<img width="855" height="471" alt="image" src="https://github.com/user-attachments/assets/fa8f5149-aab8-491a-b367-0bd7e8f85a72" />
