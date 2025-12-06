# AWS Elastic Load Balancing & Auto Scaling

This document summarizes key concepts regarding Scalability, High Availability, Elastic Load Balancing (ELB), and Auto Scaling Groups (ASG) in Amazon Web Services (AWS).

## 1. Scalability & High Availability

Scalability refers to the idea of a system in which every application or piece of infrastructure can be expanded to handle increased load.

### Types of Scalability

* **Horizontal Scalability (Elasticity / Scale Out & In):**
    * Refers to adding additional nodes or machines to your infrastructure to cope with new demands.
    * This is very common for web applications and modern distributed systems.
    * Easily achieved using Amazon EC2.

* **Vertical Scalability (Scale Up & Down):**
    * Refers to adding additional resources (like CPU or RAM) to a system to meet demand.
    * **Example:** Scaling an application from a `t2.micro` instance to a `t2.large` instance.
    * Common for non-distributed systems, such as databases.


<img width="849" height="449" alt="image" src="https://github.com/user-attachments/assets/ffaaef5f-6a84-4e70-a98d-c6face9456c7" />

<img width="850" height="452" alt="image" src="https://github.com/user-attachments/assets/65ebf749-b6ae-4891-9e6d-d97e6c89cab5" />



### High Availability (HA)

High Availability is the ability of a system to operate continuously without failing for a designated period.
* **Goal:** To survive a data center loss (disaster recovery).
* **Requirement:** Running your application/system in at least **2 Availability Zones (AZs)**.



<img width="855" height="466" alt="image" src="https://github.com/user-attachments/assets/432b6df3-e5e5-494a-8ab7-69fbe95efbb9" />

<img width="856" height="453" alt="image" src="https://github.com/user-attachments/assets/0389d5a6-b646-4fb2-ab1d-cfd34d095cc1" />

---

## 2. Elastic Load Balancing (ELB)

Elastic Load Balancing automatically distributes incoming traffic across multiple targets (such as EC2 instances, containers, and IP addresses) in one or more Availability Zones.

* **Health Checks:** The ELB monitors the health of its registered targets and routes traffic *only* to the healthy targets.

<img width="787" height="430" alt="image" src="https://github.com/user-attachments/assets/d6ab0a20-6a00-47ef-bf4f-8cb5b7eccc82" />


---

## 3. Amazon EC2 Auto Scaling

Amazon EC2 Auto Scaling helps maintain application availability by automatically adding or removing EC2 instances based on defined conditions.

### Auto Scaling Group (ASG) Attributes
An ASG ensures you have the correct number of instances running by defining:
* **Minimum Size:** The baseline number of instances that must always be running.
* **Maximum Size:** The cap on how many instances can run to control costs.
* **Desired Capacity:** The actual size currently running.
* **Self-Healing:** It creates a mechanism to replace unhealthy instances automatically.


<img width="844" height="433" alt="image" src="https://github.com/user-attachments/assets/3247fbe2-fa42-4aed-9194-42c5c67702ae" />



### ASG with Elastic Load Balancing
The Auto Scaling Group integrates directly with the Load Balancer. As the ASG adds new instances (scales out), the ELB automatically registers them and starts distributing web traffic to them.


<img width="842" height="417" alt="image" src="https://github.com/user-attachments/assets/f7cf4df6-832d-4200-8a24-3cac8b7e334c" />


---

## 4. Scaling Policies

There are several strategies to determine when to scale your infrastructure:

### A. Simple / Step Scaling
Increases or decreases the current capacity of the group based on an **Amazon CloudWatch** metric and a target value.
* **Example:** If CPU > 70% (Alarm), then add 2 units (Scale Out).
* **Example:** If CPU < 30% (Alarm), then remove 1 unit (Scale In).


<img width="788" height="383" alt="image" src="https://github.com/user-attachments/assets/e82f0430-9c76-4179-88da-867accfcce3b" />


### B. Target Tracking Scaling
Increases or decreases capacity to keep a specific metric at a specific target value.
* **Example:** "I want the average ASG CPU to stay at around 40%". The ASG will automatically adjust capacity to maintain this level.


<img width="847" height="434" alt="image" src="https://github.com/user-attachments/assets/17180165-982a-4fc9-a1bc-db440aae9ed4" />


### C. Scheduled Scaling
Anticipates scaling needs based on known, predictable usage patterns.
* **Example:** Increase the minimum capacity to 10 instances every Friday at 5:00 PM to handle weekend traffic.



<img width="779" height="345" alt="image" src="https://github.com/user-attachments/assets/078f62a1-ae78-4bef-aa81-ed87e4eb5483" />


### D. Predictive Scaling
Uses **Machine Learning** to predict future traffic ahead of time based on historical data.
* Automatically provisions the right number of EC2 instances in advance.
* Useful when your load has predictable time-based patterns.


<img width="792" height="380" alt="image" src="https://github.com/user-attachments/assets/afab8022-4e48-453c-9a3f-e14390da6a90" />


---

## Summary

* **Elastic Load Balancer (ELB):** Distributes traffic across backend EC2 instances (often Multi-AZ) and performs health checks.
* **Auto Scaling Group (ASG):** Implements elasticity, scales EC2 instances based on demand, replaces unhealthy instances, and integrates seamlessly with the ELB.
