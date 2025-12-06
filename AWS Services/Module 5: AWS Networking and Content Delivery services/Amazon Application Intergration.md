# AWS Application Integration Services

This document summarizes key AWS services used for application integration, decoupling, and orchestration, including API Gateway, SQS, SNS, Amazon MQ, Step Functions, SES, and SWF.

## 1. Amazon API Gateway

Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.

* **Role:** Acts as the "front door" for applications to access data, business logic, or functionality from backend services.
* **Capabilities:** Handles traffic management, authorization and access control, monitoring, and API version management.
* **Scale:** Can accept and process up to hundreds of thousands of concurrent API calls.


<img width="852" height="396" alt="image" src="https://github.com/user-attachments/assets/b3ea0074-a19a-4c02-8a6e-09da234da7fa" />


---

## 2. Amazon Simple Queue Service (SQS)

Amazon SQS is a managed message queuing service used to decouple distributed software systems and components. It allows you to send, store, and retrieve messages asynchronously.

* **Decoupling:** Producers send messages to the queue, and Consumers poll messages from the queue. They do not need to be online at the same time.
* **Durability:** Stores messages on multiple servers.


<img width="851" height="449" alt="image" src="https://github.com/user-attachments/assets/6106e232-e19c-4a6c-8717-707e839ccef2" />


### SQS Queue Types

| Feature | Standard Queue | FIFO Queue |
| :--- | :--- | :--- |
| **Throughput** | Unlimited (nearly unlimited TPS). | High (up to 3,000 messages/sec with batching). |
| **Delivery** | **At-Least-Once Delivery:** Messages are delivered at least once, but occasionally duplicates occur. | **Exactly-Once Processing:** A message is delivered once and remains available until processed and deleted. |
| **Ordering** | **Best-Effort Ordering:** Messages might be delivered in a different order than sent. | **First-In-First-Out:** The order in which messages are sent and received is strictly preserved. |

### Benefits of SQS
* **Control:** You control who can send/receive messages.
* **Security:** Supports server-side encryption.
* **Scalability:** Scales to handle load spikes independently.
* **Locking:** Locks messages during processing so multiple consumers don't process the same message simultaneously.

---

## 3. Amazon Simple Notification Service (SNS)

Amazon SNS is a managed service that provides message delivery from publishers to subscribers (Pub/Sub model).

* **Publishers:** Send messages to a **Topic** (a logical access point).
* **Subscribers:** Receive messages from the topic via various protocols.
    * *Application-to-Application (A2A):* Lambda, SQS, HTTP/S.
    * *Application-to-Person (A2P):* Email, SMS, Mobile Push Notifications.
* **Key Benefits:** Instantaneous delivery, flexible, inexpensive, and simple architecture.


<img width="852" height="449" alt="image" src="https://github.com/user-attachments/assets/5bdaaae8-7cc6-4aae-8b9f-e5aaa21a7fd5" />

---

## 4. Amazon MQ

Amazon MQ is a managed message broker service for **Apache ActiveMQ** and **RabbitMQ**.

* **Use Case:** Ideal for migrating existing applications ("lift and shift") to the cloud that already use protocols like MQTT, OpenWire, or AMQP.
* **Benefit:** Reduces operational responsibilities by managing provisioning, setup, and maintenance.
* **Comparison:** Unlike SQS/SNS which are cloud-native, Amazon MQ is used when you want to avoid re-engineering existing on-premise applications.


<img width="848" height="425" alt="image" src="https://github.com/user-attachments/assets/1c675ba5-0e66-46b6-83a6-4a736c429c7d" />


---

## 5. AWS Step Functions

AWS Step Functions is a serverless orchestration service that lets you coordinate distributed applications and microservices using visual workflows.

* **How it works:** Based on state machines and tasks.
* **Use Cases:**
    * Running multiple ETL jobs in order.
    * Automating recurring tasks (patch management).
    * Orchestrating microservices (combining multiple Lambda functions).


<img width="849" height="448" alt="image" src="https://github.com/user-attachments/assets/af2def42-392a-4274-a313-b24507ddc842" />
<img width="852" height="448" alt="image" src="https://github.com/user-attachments/assets/45569b66-5d63-4847-ba99-2118b2590269" />


---

## 6. Amazon Simple Email Service (SES)

Amazon SES is a cost-effective email platform that enables you to send and receive email using your own email addresses and domains.

* **Usage:** Marketing emails (special offers) or Transactional emails (order confirmations).
* **Integration:** Integrates seamlessly with S3, Lambda, SNS, and other AWS products.


<img width="850" height="429" alt="image" src="https://github.com/user-attachments/assets/d2f16667-b039-42ae-b7d6-313645eb1175" />

---

## 7. Amazon Simple Workflow Service (SWF)

Amazon SWF is a fully-managed state tracker and task coordinator.

* **Workflow:** You create desired workflows with tasks and conditional logic stored within SWF.
* **Workers:** You must implement "workers" (running on EC2 or on-premises) to perform the tasks.
* **Comparison:** SWF is older and more complex than Step Functions.

<img width="852" height="443" alt="image" src="https://github.com/user-attachments/assets/47765c75-a353-401f-9f56-2f9bca2d1b4a" />
<img width="957" height="519" alt="image" src="https://github.com/user-attachments/assets/a17edce6-cdd9-4779-af3c-e742e215b1c6" />


### Comparison: Step Functions vs. SWF

| Feature | AWS Step Functions | Amazon SWF |
| :--- | :--- | :--- |
| **Management** | 100% Managed, Serverless. | Managed state tracker, but you manage infrastructure for workers. |
| **Definition** | GUI (Visual), JSON/YAML (ASL). | Code-only (Java/Ruby Flow Framework). |
| **Complexity** | Low learning curve. | High learning curve. |
| **Recommendation** | **Recommended for most new applications.** | Legacy; typically used only if specific strict requirements exist. |

---

## Summary

* **API Gateway:** The "front door" for APIs.
* **SQS:** Message queue for decoupling (Consumer polls).
* **SNS:** Notification service for broadcasting (Push to subscribers).
* **Amazon MQ:** Managed ActiveMQ/RabbitMQ for migrations.
* **Step Functions:** Visual serverless orchestration.
* **SES:** Email sending/receiving service.
* **SWF:** Legacy workflow coordinator (code-heavy).
