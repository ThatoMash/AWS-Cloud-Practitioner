# AWS Cloud Practitioner: Networking & Content Delivery ☁️

This repository contains my study notes on AWS Networking services, covering Virtual Private Clouds (VPC), security layers, and hybrid connectivity.

##  1. Virtual Private Cloud (VPC)

<img width="1920" height="1080" alt="#1 Cloud-Native Networking Services" src="https://github.com/user-attachments/assets/09353cc2-4800-410d-9562-1b5fc24d360c" />



A **VPC** is a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. It gives you complete control over your virtual networking environment.

- **Region:** The geographical location of your network (e.g., `us-east-1`).
- **Availability Zone (AZ):** The physical data center within a region where your resources reside.
- **CIDR Block:** A range of IP addresses chosen for your VPC (e.g., `10.0.0.0/16` provides 65,536 IPs).

###  Subnets


<img width="1920" height="1080" alt="#3 Virtual Private Cloud (VPC)  Subnets" src="https://github.com/user-attachments/assets/81caa69c-883e-42fd-805f-53d230bfef72" />


A logical partition of an IP network into multiple, smaller network segments. You break up your VPC IP range to organize resources.

* **Public Subnet:** A subnet that **can** reach the internet.
    * *Used for:* Web servers, public-facing load balancers.
* **Private Subnet:** A subnet that **cannot** reach the internet directly.
    * *Used for:* Databases, backend logic, internal systems.

> **Note:** Subnets must have a smaller CIDR range than the main VPC (e.g., `10.0.0.0/24` provides 256 IPs).

---

##  2. Security: Firewalls

<img width="1920" height="1080" alt="#4 Security Groups vs NACLs" src="https://github.com/user-attachments/assets/fc7a6e3e-239f-411d-8842-24b88f8fd1bf" />


AWS uses two layers of security for your network:

| Feature | **Security Groups (SG)** | **Network Access Control Lists (NACL)** |
| :--- | :--- | :--- |
| **Scope** | Operates at the **Instance** level (e.g., EC2). | Operates at the **Subnet** level. |
| **Role** | Acts as a virtual firewall for your instance. | Acts as a firewall for the entire subnet. |
| **Rules** | Supports **ALLOW** rules only. (Implicitly denies everything else). | Supports both **ALLOW** and **DENY** rules. |
| **Behavior** | **Stateful:** Return traffic is automatically allowed. | **Stateless:** You must explicitly allow return traffic. |
| **Use Case** | Allowing SSH (Port 22) access to a specific server. | Blocking a specific IP address known for abuse. |

---

##  3. Routing & Connectivity Components

* **Internet Gateway (IGW):** Enables access to the internet for resources within a Public Subnet.
* **Route Tables:** A set of rules that determine where network traffic from your subnets is directed.
* **NAT Gateway:** (Network Address Translation) Allows instances in a private subnet to connect to the internet (e.g., for updates) but prevents the internet from initiating connections with those instances.

---

##  4. Enterprise & Hybrid Networking


<img width="1920" height="1080" alt="#2 Enterprise_or_Hybrid Networking Services" src="https://github.com/user-attachments/assets/042a7281-f183-4db1-88c9-d1bdc5fcdfd2" />


Services used to connect on-premise infrastructure to the AWS Cloud.

###  AWS Direct Connect
* A dedicated **physical** network connection from your on-premise data center to AWS.
* **Key Benefit:** Does NOT use the public internet. It offers consistent performance, lower latency, and higher security.

###  AWS Virtual Private Network (VPN)
* A secure connection between on-premise offices and AWS.
* **Key Benefit:** Quick to set up, encrypted, but traverses the **public internet**.

###  AWS PrivateLink (VPC Interface Endpoints)
* Keeps traffic within the AWS network when accessing AWS services (like S3 or DynamoDB).
* **Key Benefit:** Traffic does not traverse the public internet, increasing security.

---

### 📝 Exam Tips
1.  If a question asks about **blocking** a specific IP address, the answer is usually **NACL** (because Security Groups cannot deny).
2.  If a question asks for a **dedicated physical connection**, the answer is **Direct Connect**.
3.  **VPC** = Your House. **Subnets** = Rooms in your house. **Security Group** = Security guard at the room door. **NACL** = Security guard at the front gate.
