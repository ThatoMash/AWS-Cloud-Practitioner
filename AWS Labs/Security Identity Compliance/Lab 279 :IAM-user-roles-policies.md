# AWS Identity and Access Management (IAM): RBAC & Least Privilege


In a secure cloud environment, the **Principle of Least Privilege** is paramount. Granting users access to "everything" creates significant security vulnerabilities. 

This project demonstrates the implementation of a robust Identity and Access Management (IAM) strategy on AWS. I configured account-wide security settings, implemented **Role-Based Access Control (RBAC)** by assigning users to groups with specific permissions, and verified the isolation of duties. The goal was to simulate a real-world business scenario where staff members perform distinct roles (Support vs. Admin) without overlapping privileges.

---

##  Architecture & Business Scenario
The lab environment consists of three distinct users, each requiring different levels of access to AWS resources (EC2 and S3).

**The Access Matrix:**
| User | User Group | Assigned Permissions |
| :--- | :--- | :--- |
| **user-1** | S3-Support | Read-only access to Amazon S3 buckets. |
| **user-2** | EC2-Support | Read-only access to view EC2 instances (cannot stop/start). |
| **user-3** | EC2-Admin | Full permissions to view, start, and stop EC2 instances. |

---

##  Implementation Steps

### Task 1: Strengthening Account Security
**Objective:** Enforce stricter password requirements for all IAM users to prevent credential compromise.

**What I did:**
I navigated to the IAM Account Settings and replaced the default password policy with a custom, hardened policy.
* **Minimum Password Length:** Increased to 10 characters.
* **Complexity:** Required uppercase, lowercase, numbers, and symbols.
* **Expiration:** Enforced a 90-day password rotation cycle.

**Implementation Screenshots:**
*Dashboard & Default Policy:*
<img width="1347" alt="IAM Dashboard" src="https://github.com/user-attachments/assets/eeb19d6f-eab2-4052-a062-ab3633b5326b" />
<img width="1351" alt="Default Policy" src="https://github.com/user-attachments/assets/309d432b-7832-421e-9528-2ab6c3b67812" />

*Custom Hardened Policy:*
<img width="1361" alt="Custom Policy Settings" src="https://github.com/user-attachments/assets/bb9adcc8-c536-495e-9c3e-c43610c4002c" />
<img width="1350" alt="Policy Review" src="https://github.com/user-attachments/assets/43b2786a-32f2-4321-a8aa-30ace15bd1f3" />
<img width="1068" alt="Policy Applied" src="https://github.com/user-attachments/assets/469f45bb-8fdb-4ad5-9686-4f7c316c5550" />

---

### Task 2: User & Group Management
**Objective:** Efficient user management by assigning permissions to Groups rather than individual users.

**What I did:**
I reviewed the existing users (`user-1`, `user-2`, `user-3`) and confirmed they started with no permissions. I then inspected the `S3-Support` group to understand the `AmazonS3ReadOnlyAccess` policy attached to it.

**Implementation Screenshots:**
<img width="1346" alt="User List" src="https://github.com/user-attachments/assets/20349328-bf30-4dae-8205-957f92ea2f4d" />
<img width="1098" alt="User Summary" src="https://github.com/user-attachments/assets/bedd5898-c7d5-4e5c-845c-c9f15efbfc83" />
<img width="1348" alt="S3 Group" src="https://github.com/user-attachments/assets/86656b94-0592-454e-ad5d-6d2926cccee8" />

---

### Task 3: Implementing Role-Based Access Control (RBAC)
**Objective:** Assign users to their specific functional groups to inherit permissions.

**What I did:**
Instead of managing users individually, I added them to groups. This ensures scalability—if I hire 10 new S3 support staff, I simply add them to the group rather than configuring each one manually.
* Added **user-1** to **S3-Support**.
* Added **user-2** to **EC2-Support**.
* Added **user-3** to **EC2-Admin**.

**Implementation Screenshots:**
<img width="1088" alt="User-1 Added" src="https://github.com/user-attachments/assets/b7660645-8e59-4025-a180-d2831a722a8d" />
<img width="1346" alt="User-2 Added" src="https://github.com/user-attachments/assets/b6f5616b-28df-49af-8937-5b4856f1175c" />
<img width="1349" alt="User-3 Added" src="https://github.com/user-attachments/assets/b73aad0d-686f-4d40-8fdd-2efd13e478d0" />

---

### Task 4: Verification & Permission Testing
**Objective:** Validate that the "Allow" and "Deny" logic is functioning correctly for each persona.

#### Scenario A: S3 Support (user-1)
I logged in as `user-1`. I was successfully able to view S3 buckets, but when attempting to view EC2 instances, I received an "Access Denied" error, confirming isolation of duties.

**Evidence:**
*S3 Access (Success):*
<img width="1340" alt="S3 Success" src="https://github.com/user-attachments/assets/190339a5-c9e0-4063-85d0-c1c3162c67a8" />

*EC2 Access (Denied):*
<img width="1351" alt="EC2 Denied" src="https://github.com/user-attachments/assets/a4d49031-403c-4bce-b42b-93e196e31b34" />

#### Scenario B: EC2 Admin (user-3)
I logged in as `user-3`. Since this user is part of the Admin group, I verified that I could not only view instances but also perform administrative actions. I successfully executed the **Stop Instance** command.

**Evidence:**
<img width="1361" alt="EC2 Admin View" src="https://github.com/user-attachments/assets/eaadafb6-a2f5-4d67-be8f-e38acfafeaf8" />
<img width="1357" alt="Stopping Instance" src="https://github.com/user-attachments/assets/009990d5-91ba-4094-b2f5-cfd9484f9373" />
<img width="1358" alt="Stop Success" src="https://github.com/user-attachments/assets/a2c4157a-0bf3-44a5-9dfb-d35fa28b3d40" />
<img width="1348" alt="Instance Stopped" src="https://github.com/user-attachments/assets/c923d60d-e28f-4a8d-8437-5ad6d7734106" />

---

##  Key Points
* **Least Privilege:** Verified that users could only perform actions explicitly allowed by their group policies.
* **Scalability:** Demonstrated that managing permissions via Groups is significantly more efficient than managing individual users.
* **Security Posture:** Understood the importance of strong account-wide password policies.
* **Managed vs. Inline Policies:** Gained experience with AWS Managed policies for general use cases and custom Inline policies for specific admin rights.
