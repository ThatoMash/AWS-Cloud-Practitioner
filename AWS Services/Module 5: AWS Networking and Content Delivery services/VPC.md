# ☁️ AWS Cloud Practitioner: Amazon VPC & Networking

This guide covers the core concepts of Amazon Virtual Private Cloud (VPC), security layers, connectivity options, and hybrid networking as outlined in the study materials.

---

##  1. Amazon VPC Overview


**Amazon VPC (Virtual Private Cloud)** is a virtual network dedicated to your AWS account. It is logically isolated from other virtual networks in the AWS Cloud .
*It allows you to launch AWS resources (like EC2 instances) into a virtual network that you define.
* It provides control over your virtual networking environment, separating your data from other clouds.

###  Key Components

<img width="961" height="500" alt="image" src="https://github.com/user-attachments/assets/f2c3fcdb-796f-4bcf-b6a5-3fb3adff6f33" />


* **Subnet:** A range of IP addresses in your VPC. [cite_start]You launch resources into a specific subnet.
    * **Public Subnet:** Used for resources that must be connected to the internet.
    * **Private Subnet:** Used for resources that will **not** be connected to the internet directly
* **Route Table:** Contains routes (rules) that determine where network traffic is directed.
* **Internet Gateway (IGW):** Connects your VPC instances to the internet. Public subnets must have a route to the IGW.
* **NAT Devices (Gateway/Instance):** Allow instances in a **Private Subnet** to access the internet (e.g., for software updates) while preventing the internet from initiating connections with those instances.

---

##  2. Security Layers



<img width="959" height="480" alt="image" src="https://github.com/user-attachments/assets/7952ade2-0a7a-419e-8b6d-4ff3f8ab7036" />


AWS provides two layers of firewalls to control traffic:

| Feature | **Network ACL (NACL)** | **Security Group (SG)** |
| :--- | :--- | :--- |
| **Scope** | Controls traffic to and from a **Subnet**. | Controls traffic to and from an **Instance/ENI**]. |
| **Rules** | ]Supports both **ALLOW** and **DENY** rules[cite: 552]. | ]Supports **ALLOW** rules only. |
| **State** | ]**Stateless:** You must explicitly allow return traffic. | ]**Stateful:** Return traffic is automatically allowed. |

###  VPC Flow Logs


<img width="967" height="500" alt="image" src="https://github.com/user-attachments/assets/e6f48a70-c203-41ef-9dc0-3e12f096293e" />


**VPC Flow Logs** capture detailed information about the traffic going to and from network interfaces in your VPC]. They are useful for:
1.  Diagnosing overly restrictive security group rules.
2.  Monitoring traffic reaching your instance].
3.  Determining the direction of traffic.

---

##  3. Connectivity Options

### VPC Peering

<img width="962" height="509" alt="image" src="https://github.com/user-attachments/assets/9f707c04-b978-43c9-b1ca-c2f9dc0a8107" />


* A networking connection between two VPCs that enables you to route traffic between them privately.
* Instances behave as if they are on the same network.
* *Important:** VPC Peering is **not transitive** (If A connects to B, and B connects to C, A does not automatically connect to C).

### VPC Endpoints (PrivateLink)

<img width="958" height="518" alt="image" src="https://github.com/user-attachments/assets/7181ce1d-82ad-4457-8ba3-0518d0ccbcfb" />


Enables you to privately connect your VPC to supported AWS services without using the public internet. This offers enhanced security and lower latency .
1.  **Gateway Endpoint:** Used specifically for **S3** and **DynamoDB**.
2.  **Interface Endpoint:** Used for other services, powered by PrivateLink.

---

##  4. Hybrid Networking (On-Premises to AWS)

![Hybrid Networking Diagram](placeholder_for_hybrid_networking_image.jpg

<img width="955" height="510" alt="image" src="https://github.com/user-attachments/assets/45357b16-29ba-4a21-9701-5312907b20ec" />


###  AWS Site-to-Site VPN
* Establishes a secure connection between your on-premises network and your VPC.
* **Encryption:** The connection is encrypted and goes over the **public internet**.
* **Components Required:**
    * **Customer Gateway (CGW):** On the customer (on-premises) side.
    * **Virtual Private Gateway (VGW):** On the AWS side.

### 🔌 AWS Direct Connect
* A dedicated **physical** network connection from your on-premises data center to AWS.
* **Benefits:** Private, secure, and consistent network performance.It does **not** use the public internet.

###  AWS Transit Gateway
* A central hub ("Cloud Router") that connects **thousands** of VPCs and on-premises networks to a single gateway.
* It simplifies network topology by acting as a central point for VPCs, Direct Connect, and VPN connections .
