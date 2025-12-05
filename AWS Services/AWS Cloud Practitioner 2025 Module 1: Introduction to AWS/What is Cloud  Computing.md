# Cloud Computing Fundamentals

Welcome to the Cloud Computing knowledge base. This repository serves as a reference guide for understanding the core concepts, service models, and deployment strategies of cloud computing.

## ☁️ What is Cloud Computing?

**Definition:**
Cloud computing is the practice of using a network of remote servers hosted on the Internet to store, manage, and process data, rather than using a local server or a personal computer.

### On-Premise vs. Cloud Providers

| Feature | On-Premise (Traditional) | Cloud Providers (AWS, Azure, GCP) |
| :--- | :--- | :--- |
| **Ownership** | You own the servers. | The provider owns the servers. |
| **Staffing** | You hire the IT staff. | The provider hires the IT staff. |
| **Real Estate** | You pay/rent the datacenter space. | The provider pays/rents the real estate. |
| **Responsibility** | You take all the risk. | You manage config/code; they manage hardware. |

---

##  Types of Cloud Computing (Service Models)

Cloud computing is often categorized into a pyramid of three service models, depending on who manages what.

### 1. SaaS (Software as a Service)
* **Target Audience:** Customers / End Users
* **Description:** A completed product that is run and managed by the service provider. You do not worry about how the service is maintained; it just works.
* **Examples:** Salesforce, Gmail, Office 365, Dropbox.

### 2. PaaS (Platform as a Service)
* **Target Audience:** Developers
* **Description:** Focuses on the deployment and management of applications. Developers don't worry about provisioning, configuring, or understanding the underlying hardware or OS.
* **Examples:** Heroku, AWS Elastic Beanstalk, Google App Engine.

### 3. IaaS (Infrastructure as a Service)
* **Target Audience:** Admins / IT Architects
* **Description:** The basic building blocks for cloud IT. Provides access to networking features, computers (virtual or dedicated hardware), and data storage space. You don't worry about the physical datacenter.
* **Examples:** Amazon EC2, Microsoft Azure Virtual Machines, Oracle Cloud.

---

## Deployment Models

How and where the cloud infrastructure is built.

### Public Cloud
* **Concept:** Everything (workload/project) is built on the Cloud Service Provider (CSP).
* **Also known as:** Cloud-Native or Cloud First.
* **Infrastructure:** Uses the public internet to share resources across organizations.

### Private Cloud
* **Concept:** Everything is built on the company's own datacenters using cloud technologies (e.g., OpenStack).
* **Also known as:** On-Premise.
* **Infrastructure:** Dedicated resources used exclusively by one organization.

### Hybrid Cloud
* **Concept:** A combination of both **On-Premise** (Private) and a **Cloud Service Provider** (Public).
* **Connection:** Usually connected via a secure VPN or dedicated line (like AWS Direct Connect).
* **Benefit:** Allows data and applications to be shared between them.

### Cross-Cloud (Multi-Cloud)
* **Concept:** Using multiple Cloud Providers simultaneously to avoid vendor lock-in or leverage specific features.
* **Example:** Using Amazon EKS, Azure Arc, and GCP Kubernetes Engine together.
* **Tools:** Platforms like **Google Anthos** provide a control plane to manage compute across multiple CSPs and on-premise environments.

---

##  Use Cases: Which Model to Choose?

| Model | Ideal Profile | Examples |
| :--- | :--- | :--- |
| **Cloud (Public)** | Startups, SaaS offerings, new projects, and companies large enough to leap from VPS to CSP. | Dropbox, Squarespace, Startups. |
| **Hybrid** | Organizations that started with their own data centers but cannot fully move to the cloud due to migration effort or specific security compliance. | Banks, FinTech, Investment Boards (e.g., Deloitte, CIBC). |
| **On-Premise** | Organizations that cannot run on the cloud due to strict regulatory compliance or sheer organizational size. | Public Sector (Gov), Hospitals (sensitive health data), Insurance Companies (e.g., AIG). |

---

*Reference material based on CLF-C01 study guides.*
