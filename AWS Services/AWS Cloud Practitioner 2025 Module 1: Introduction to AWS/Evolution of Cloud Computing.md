# 📈 The Evolution of Computing and Cloud Hosting

This repository documents the evolution of computing, from dedicated physical servers to modern serverless functions, highlighting how resource utilization, scalability, and efficiency have improved over time.

---

## 💻 Hosting Evolution: From Dedicated to Cloud

The way businesses host applications has transformed dramatically, primarily focusing on better resource utilization and flexibility.

| Hosting Model | Description | Key Characteristics |
| :--- | :--- | :--- |
| **Dedicated Server** | One physical machine dedicated to a single business. | Very expensive, high maintenance, high security. |
| **Virtual Private Server (VPS)** | One physical machine is virtualized into sub-machines for a single business. | Better utilization and isolation of resources. |
| **Shared Hosting** | One physical machine shared by hundreds of businesses. | Very cheap, poor isolation, limited functionality. |
| **Cloud Hosting** | Multiple physical machines act as one system, abstracted into multiple cloud services. | Flexible, scalable, secure, cost-effective, and highly configurable. |

---

## ➡️ The Progression of Compute: Dedicated to Functions

The underlying compute unit has evolved to become smaller, more isolated, and more efficient.

### 1. Dedicated (Physical Server)

This is a physical server wholly utilized by a single customer.

* You must guess your capacity, often leading to wasted space and overpaying for an underutilized server.
* Scaling is difficult (cannot vertical scale) and requires manual migration.
* You are limited by the Host Operating System (OS).
* You have a guarantee of security, privacy, and full utility of underlying resources.

### 2. Virtual Machines (VMs)

You can run multiple Virtual Machines on one physical machine.

* **Hypervisor** is the software layer that lets you run the VMs.
* A physical server is shared by multiple customers.
* You pay for a fraction of the server, but may overpay for an underutilized VM (due to "wasted space" within the VM).
* Each VM includes its own **Guest OS**.
* VM images are easy to export or import for migration.

### 3. Containers

Containers allow a Virtual Machine to run multiple, highly efficient applications.

* Containers share the same underlying OS, making them more efficient than using multiple VMs.
* **Docker Daemon** is the software layer that lets you run multiple containers.
* You can maximize the utilization of available capacity, which is more cost-effective.
* Multiple apps can run side by side without being limited to the same OS requirements and will not cause conflicts during resource sharing.

### 4. Functions (Serverless Compute)

This model represents the ultimate abstraction layer, moving towards **Serverless Compute**.

* Functions run on managed VMs which are running managed containers.
* You upload a piece of code, choose the amount of memory and duration.
* You are only responsible for the code and data, nothing else.
* It is very cost-effective; you only pay for the time the code is running. VMs only run when there is code to be executed.
* **Cold Starts** are a side-effect of this setup (a slight delay when the function is first executed after a period of inactivity).
