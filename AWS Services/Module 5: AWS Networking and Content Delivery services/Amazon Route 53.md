#  AWS Cloud Practitioner: Amazon Route 53 (DNS)

This guide covers Amazon Route 53, AWS's scalable Domain Name System (DNS) web service, including its key functions and routing policies.

---

##  1. What is Amazon Route 53?



<img width="262" height="200" alt="image" src="https://github.com/user-attachments/assets/adcc73bb-735f-4c36-a9d1-69a43d2d5432" />


**Amazon Route 53** is a highly available and scalable cloud **Managed DNS (Domain Name System)** web service.

**What is DNS?**
DNS is a collection of rules and records that helps clients understand how to reach a server through URLs (translating human-readable domain names like `www.example.com` into IP addresses like `192.0.2.1`).

**Three Main Functions:**
1.  **Register Domain Names:** You can purchase and manage domain names.
2.  **Route Internet Traffic:** Directs requests to the resources for your domain (like EC2 instances, Load Balancers, or S3 buckets).
3.  **Check Health:** Monitors the health of your resources and routes traffic away from unhealthy ones.

---

##  2. Routing Policies

Route 53 uses "Routing Policies" to determine how to respond to DNS queries.

### A. Simple Routing Policy

<img width="737" height="289" alt="image" src="https://github.com/user-attachments/assets/e10e5910-b505-431a-87fc-8c539846aa99" />


* **Description:** Use a single resource that performs a given function for your domain.
* **Behavior:** It returns the IP address for a single server or resource.
* **Health Checks:** Does **not** support health checks.

### B. Failover Routing Policy


<img width="902" height="361" alt="image" src="https://github.com/user-attachments/assets/dc9a5f8b-29c9-4f2d-90cc-f6711cb386f5" />


* **Description:** Used for **Disaster Recovery**. Configures an **Active-Passive** failover setup.
* **Behavior:**
    * **Primary:** Traffic goes here normally.
    * **Failover:** Traffic is routed here only if the Primary is unhealthy.
* **Health Checks:** Mandatory. Route 53 monitors the health of the Primary endpoint to decide when to switch.

### C. Latency Routing Policy


<img width="942" height="360" alt="image" src="https://github.com/user-attachments/assets/77f130b9-4524-4428-aa49-48ca8fb6d004" />


* **Description:** Used when you have resources deployed in multiple AWS Regions.
* **Behavior:** Routes traffic to the AWS Region that provides the **lowest latency** (fastest response time) for the specific user.
* **Goal:** Optimize performance for a global user base.

### D. Weighted Routing Policy

<img width="917" height="363" alt="image" src="https://github.com/user-attachments/assets/59658ab4-ae03-404f-af70-51e6957df9ef" />




* **Description:** Distributes traffic across multiple resources based on specific proportions (weights) that you define.
* **Example:**
    * **Resource A:** 70% of traffic.
    * **Resource B:** 20% of traffic.
    * **Resource C:** 10% of traffic.
* **Use Cases:** A/B testing, gradual migration to new versions.

---

##  Summary

* **Global Service:** Route 53 is a global service, meaning it is not bound to a single region.
* **Disaster Recovery:** Essential for implementing DR strategies using Failover routing.
* **Performance:** Great for routing users to the closest deployment with the least latency.
