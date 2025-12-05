# AWS Well-Architected Framework

## Introduction
The AWS Well-Architected Framework is a whitepaper created by AWS to assist customers in building using best practices defined by AWS.
It serves as a guide for cloud architects to build secure, high-performing, resilient, and efficient infrastructure.

### Framework Overview
The framework is divided into five sections, known as "pillars," which address different aspects or "lenses" that can be applied to a cloud workload.
If the foundation is not solid, structural problems will arise.


<img width="1920" height="1080" alt="#1 AWS Well-Architected Framework" src="https://github.com/user-attachments/assets/d4ef9de8-78da-40de-a0d8-63dc2f6b9d55" />


### Core Definitions and Business Value
To utilize the framework effectively, it is essential to understand the general definitions and the business value associated with each pillar.
* **Operational Excellence:** Focuses on running and monitoring systems.
* **Security:** Focuses on protecting data and systems and mitigating risk.
* **Reliability:** Focuses on mitigating and recovering from disruptions.
* **Performance Efficiency:** Focuses on using computing resources effectively.
* **Cost Optimization:** Focuses on getting the lowest price.

A **Workload** is defined as a set of components that work together to deliver business value, while **Architecture** describes how those components work together.



<img width="1920" height="1080" alt="#8 Security" src="https://github.com/user-attachments/assets/7b7ddc1a-2eca-4c97-a169-e721102fd32b" />


## Organizational Culture and Architecture

### Team Structure: Enterprise vs. AWS
The framework encourages a shift in team structure. Traditional on-premise enterprises generally have centralized teams with specific roles
(e.g., Technical, Solution, Data, Networking, and Security Architects) managed by frameworks like TOGAF or Zachman. In contrast 
AWS utilizes distributed teams with flexible roles supported by mechanisms like automated checks for standards.



<img width="1920" height="1080" alt="#3 On Architecture" src="https://github.com/user-attachments/assets/c37004e9-ce5c-43ee-bba9-70693a48a021" />

th="1920" height="1080" alt="#3 On Architecture" src="https://github.com/user-attachments/assets/da69672e-f350-4e24-9e57-51bc346d05bd" />


### Amazon Leadership Principles
Distributed teams within this framework are guided by the Amazon Leadership Principles. These principles are a set of guidelines used during decision-making,
problem-solving, simple brainstorming, and hiring. They include tenets such as "Customer Obsession," "Ownership," and "Dive Deep".



<img width="1920" height="1080" alt="#4 Amazon Leadership Principles" src="https://github.com/user-attachments/assets/01a9b021-1ce2-4d89-a23c-fcd75e5cba4f" />


---

## Design Principles

### General Design Principles
Before looking at specific pillars, there are general design principles applicable to all cloud architectures:
* **Stop guessing your capacity needs:** Use as little or much as needed based on demand.
* **Test systems at production scale:** Clone production environments for testing and tear them down when not in use.
* **Automate to make architectural experimentation easier:** Use tools like CloudFormation.
* **Drive architectures using data:** Utilize CloudWatch and CloudTrail for data collection.
* **Improve through game days:** Simulate traffic or failure to test recovery.



<img width="1920" height="1080" alt="#5 General Design Principles" src="https://github.com/user-attachments/assets/5b105148-58f0-4740-8a76-087a7893297b" />


### Anatomy of a Pillar
Each pillar of the Well-Architected Framework follows a specific structure containing Design Principles,
a Definition of best practice categories, Best Practices (detailed information with AWS Services), and Resources.



<img width="1920" height="1080" alt="#6 Anatomy of a Pillar" src="https://github.com/user-attachments/assets/a06d018e-a4b9-4369-ab47-7cdba071b466" />


---

## The 5 Pillars of the Framework

### 1. Operational Excellence
The Operational Excellence pillar emphasizes running and monitoring systems to deliver business value.
Design principles include performing operations as code to limit human error, making frequent, small,
reversible changes, and refining operations procedures frequently. It is also critical to anticipate failure and learn from all operational failures.

![#7 Operation Excellence.jpg](#7 Operation Excellence.jpg)

<img width="1920" height="1080" alt="#7 Operation Excellence" src="https://github.com/user-attachments/assets/a51adb82-28ee-4df1-b238-233a28b924f6" />


### 2. Security
The Security pillar focuses on protecting information and systems.
Key design principles involve implementing a strong identity foundation (Principle of Least Privilege), 
enabling traceability through real-time auditing, applying security at all layers (defense in depth), and automating security best practices.



<img width="1920" height="1080" alt="#8 Security" src="https://github.com/user-attachments/assets/6085fbb0-b825-42ab-a166-2c44246aeeae" />

### 3. Reliability
The Reliability pillar ensures a workload performs its intended function correctly and consistently.
Principles include automatically recovering from failure using automation, testing recovery procedures,
scaling horizontally to increase aggregate system availability, and managing change in automation.



### 4. Performance Efficiency
The Performance Efficiency pillar focuses on the efficient use of IT and computing resources.
Design principles include democratizing advanced technologies (using managed services),
going global in minutes to lower latency, using serverless architectures to remove the operational burden of physical servers, and experimenting more often.



---

## Conclusion
The AWS Well-Architected Framework provides a consistent approach for customers to evaluate architectures and implement scalable designs.
By adhering to the general design principles—such as stopping the guess-work on capacity and automating experimentation 
and applying the specific lenses of the five pillars, organizations can build cloud workloads that are robust, secure, and cost-effective.
