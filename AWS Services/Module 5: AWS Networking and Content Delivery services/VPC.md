# ☁️ AWS Cloud Practitioner: Amazon VPC & Networking

This guide covers the core concepts of Amazon Virtual Private Cloud (VPC), security layers, connectivity options, and hybrid networking as outlined in the study materials.

---

##  1. Amazon VPC Overview


**Amazon VPC (Virtual Private Cloud)** is a virtual network dedicated to your AWS account. [cite_start]It is logically isolated from other virtual networks in the AWS Cloud [cite: 499-500].
* [cite_start]It allows you to launch AWS resources (like EC2 instances) into a virtual network that you define[cite: 501].
* [cite_start]It provides control over your virtual networking environment, separating your data from other clouds[cite: 502].

###  Key Components

<img width="961" height="500" alt="image" src="https://github.com/user-attachments/assets/f2c3fcdb-796f-4bcf-b6a5-3fb3adff6f33" />


* **Subnet:** A range of IP addresses in your VPC. [cite_start]You launch resources into a specific subnet[cite: 529].
    * [cite_start]**Public Subnet:** Used for resources that must be connected to the internet[cite: 530].
    * [cite_start]**Private Subnet:** Used for resources that will **not** be connected to the internet directly[cite: 533].
* [cite_start]**Route Table:** Contains routes (rules) that determine where network traffic is directed[cite: 534].
* **Internet Gateway (IGW):** Connects your VPC instances to the internet. [cite_start]Public subnets must have a route to the IGW[cite: 542].
* [cite_start]**NAT Devices (Gateway/Instance):** Allow instances in a **Private Subnet** to access the internet (e.g., for software updates) while preventing the internet from initiating connections with those instances[cite: 543].

---

##  2. Security Layers



<img width="959" height="480" alt="image" src="https://github.com/user-attachments/assets/7952ade2-0a7a-419e-8b6d-4ff3f8ab7036" />


AWS provides two layers of firewalls to control traffic:

| Feature | **Network ACL (NACL)** | **Security Group (SG)** |
| :--- | :--- | :--- |
| **Scope** | [cite_start]Controls traffic to and from a **Subnet**[cite: 551]. | [cite_start]Controls traffic to and from an **Instance/ENI**[cite: 570]. |
| **Rules** | [cite_start]Supports both **ALLOW** and **DENY** rules[cite: 552]. | [cite_start]Supports **ALLOW** rules only[cite: 572]. |
| **State** | [cite_start]**Stateless:** You must explicitly allow return traffic[cite: 709]. | [cite_start]**Stateful:** Return traffic is automatically allowed[cite: 710]. |

###  VPC Flow Logs


<img width="967" height="500" alt="image" src="https://github.com/user-attachments/assets/e6f48a70-c203-41ef-9dc0-3e12f096293e" />


[cite_start]**VPC Flow Logs** capture detailed information about the traffic going to and from network interfaces in your VPC[cite: 579]. They are useful for:
1.  [cite_start]Diagnosing overly restrictive security group rules[cite: 582].
2.  [cite_start]Monitoring traffic reaching your instance[cite: 593].
3.  [cite_start]Determining the direction of traffic[cite: 594].

---

##  3. Connectivity Options

### VPC Peering

<img width="962" height="509" alt="image" src="https://github.com/user-attachments/assets/9f707c04-b978-43c9-b1ca-c2f9dc0a8107" />


* [cite_start]A networking connection between two VPCs that enables you to route traffic between them privately[cite: 596].
* [cite_start]Instances behave as if they are on the same network[cite: 597].
* [cite_start]**Important:** VPC Peering is **not transitive** (If A connects to B, and B connects to C, A does not automatically connect to C)[cite: 599].

### VPC Endpoints (PrivateLink)

<img width="958" height="518" alt="image" src="https://github.com/user-attachments/assets/7181ce1d-82ad-4457-8ba3-0518d0ccbcfb" />


[cite_start]Enables you to privately connect your VPC to supported AWS services without using the public internet[cite: 612]. [cite_start]This offers enhanced security and lower latency [cite: 615-616].
1.  [cite_start]**Gateway Endpoint:** Used specifically for **S3** and **DynamoDB**[cite: 617].
2.  [cite_start]**Interface Endpoint:** Used for other services, powered by PrivateLink[cite: 618].

---

##  4. Hybrid Networking (On-Premises to AWS)

![Hybrid Networking Diagram](placeholder_for_hybrid_networking_image.jpg

<img width="955" height="510" alt="image" src="https://github.com/user-attachments/assets/45357b16-29ba-4a21-9701-5312907b20ec" />


###  AWS Site-to-Site VPN
* [cite_start]Establishes a secure connection between your on-premises network and your VPC[cite: 631].
* [cite_start]**Encryption:** The connection is encrypted and goes over the **public internet**[cite: 632].
* **Components Required:**
    * [cite_start]**Customer Gateway (CGW):** On the customer (on-premises) side[cite: 633].
    * [cite_start]**Virtual Private Gateway (VGW):** On the AWS side[cite: 634].

### 🔌 AWS Direct Connect
* [cite_start]A dedicated **physical** network connection from your on-premises data center to AWS[cite: 647].
* **Benefits:** Private, secure, and consistent network performance. [cite_start]It does **not** use the public internet [cite: 657-668].

###  AWS Transit Gateway
* [cite_start]A central hub ("Cloud Router") that connects **thousands** of VPCs and on-premises networks to a single gateway[cite: 689].
* [cite_start]It simplifies network topology by acting as a central point for VPCs, Direct Connect, and VPN connections [cite: 700-722].
