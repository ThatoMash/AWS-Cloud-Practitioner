# Amazon Route 53 Failover Routing Lab

## Lab Overview
In this lab, you configure **failover routing** for a simple web application using Amazon Route 53. The lab environment has two **EC2 instances** running the café website in different Availability Zones. The goal is to ensure high availability by automatically failing over traffic to a secondary instance if the primary instance becomes unavailable.

### Architecture
The final setup includes:

- Two EC2 instances in different Availability Zones.
- Route 53 failover routing configured between primary and secondary instances.
- Health check monitoring for automatic failover and email notifications.

**Architecture Diagram  
<img width="593" height="516" alt="image" src="https://github.com/user-attachments/assets/248462cc-77d9-4c03-90a6-96ac7d723ceb" />


---

## Objectives
After completing this lab, you should be able to:

- Configure a Route 53 health check that sends emails when an HTTP endpoint becomes unhealthy.
- Configure failover routing in Route 53.



## Lab Steps

### 1. Confirm the Café Websites
- Access the **PrimaryWebsiteURL** and **SecondaryWebsiteURL** in separate browser tabs.
- Verify both sites are running the café application and are hosted in different Availability Zones.
- Test the menu submission to confirm both websites are functioning.

**Screenshot Placeholder:**  
<img width="809" height="475" alt="image" src="https://github.com/user-attachments/assets/b1ad465d-0f6d-4577-8dab-4c891fcac647" />

<img width="925" height="607" alt="image" src="https://github.com/user-attachments/assets/c2af2583-7030-4910-9c3c-8aaba64e9402" />

<img width="638" height="595" alt="image" src="https://github.com/user-attachments/assets/7c63df2f-900c-4106-a3e2-a4999a2a8b55" />
<img width="658" height="609" alt="image" src="https://github.com/user-attachments/assets/09f1d1d2-69ce-4e96-b50e-d25198142260" />

<img width="641" height="357" alt="image" src="https://github.com/user-attachments/assets/de72af22-645c-4e84-94b8-6fd8e7ed5af6" />

### 2. Configure a Route 53 Health Check
- Open the **Route 53 Console**, go to **Health checks**, and click **Create health check**.
- Configure the health check for the primary website:
  - **Name:** Primary-Website-Health
  - **Monitor:** Endpoint
  - **IP Address:** CafeInstance1IPAddress
  - **Path:** /cafe
  - **Request interval:** Fast (10 seconds)
  - **Failure threshold:** 2
- Configure email notifications via a new SNS topic.
- Confirm the subscription via the email sent by AWS.

**Screenshot Placeholder:**  

<img width="1365" height="573" alt="image" src="https://github.com/user-attachments/assets/0f09bd74-43b3-4d8b-8450-2fffd8ff8e8a" />
<img width="1352" height="570" alt="image" src="https://github.com/user-attachments/assets/5f834683-c8ea-4968-8d6a-9b95ce2e55f5" />
<img width="1362" height="574" alt="image" src="https://github.com/user-attachments/assets/a1a47ca9-82a2-4fc7-ba22-241ea9d20063" />

<img width="1360" height="571" alt="image" src="https://github.com/user-attachments/assets/239595a6-0513-4d0f-9de9-c814d6eb4fd0" />

<img width="1358" height="572" alt="image" src="https://github.com/user-attachments/assets/9f4be645-f4a0-4491-9814-951f76e2f9e2" />



### 3. Configure Route 53 Records

#### 3.1 Create A Record for Primary Website
- **Record name:** www  
- **Type:** A  
- **Value:** CafeInstance1IPAddress  
- **TTL:** 15  
- **Routing policy:** Failover (Primary)  
- **Health check ID:** Primary-Website-Health  
- **Record ID:** FailoverPrimary  

**Screenshot Placeholder:**  
<img width="1349" height="564" alt="image" src="https://github.com/user-attachments/assets/977f64f8-b417-405b-a167-b10f04608f81" />
<img width="1364" height="574" alt="image" src="https://github.com/user-attachments/assets/1becbff8-d6ff-4b95-8297-c7cbb868e049" />
<img width="1365" height="575" alt="image" src="https://github.com/user-attachments/assets/7f499d90-c11a-41f7-b31d-d248c32b338c" />
<img width="1361" height="574" alt="image" src="https://github.com/user-attachments/assets/af94ac31-a937-47c1-abed-ef961b0a8a94" />
<img width="1363" height="581" alt="image" src="https://github.com/user-attachments/assets/9e40e5da-d14e-4913-a345-56a03e29a40c" />



#### 3.2 Create A Record for Secondary Website
- **Record name:** www  
- **Type:** A  
- **Value:** CafeInstance2IPAddress  
- **TTL:** 15  
- **Routing policy:** Failover (Secondary)  
- **Health check ID:** Leave empty  
- **Record ID:** FailoverSecondary  

**Screenshot Placeholder:**  
<img width="1361" height="598" alt="image" src="https://github.com/user-attachments/assets/c262f05d-b729-4eab-8673-60f460e20df1" />

<img width="1346" height="574" alt="image" src="https://github.com/user-attachments/assets/376bd7a7-a676-4a9c-a16b-ae141cf39b65" />
<img width="1360" height="567" alt="image" src="https://github.com/user-attachments/assets/5d2819cd-7d11-403a-b18f-fe1f684966a5" />


---

### 4. Verify DNS Resolution
- Copy the record name for the primary website.
- Open a browser and navigate to `http://<Record-Name>/cafe`.
- Confirm the site loads and displays the correct Availability Zone.

**Screenshot Placeholder:**  
<img width="1343" height="165" alt="image" src="https://github.com/user-attachments/assets/725840fa-d0c5-46f8-9ae5-a25d1c19a11c" />

<img width="1365" height="176" alt="image" src="https://github.com/user-attachments/assets/9fe45c9b-0d2e-4a5d-8080-7758a19e3188" />

<img width="1329" height="589" alt="image" src="https://github.com/user-attachments/assets/b1824614-29b7-452d-82cd-d9d94bf96702" />



### 5. Verify Failover Functionality
- Stop **CafeInstance1** from the EC2 Console.
- Wait for Route 53 health check to mark it as **Unhealthy**.
- Refresh the café website in your browser. The site should now be served from **CafeInstance2**.
- Confirm receipt of the AWS notification email.

**Screenshot Placeholder:**  
<img width="1365" height="576" alt="image" src="https://github.com/user-attachments/assets/e29aa8ca-50df-4578-a0aa-0bbd256cf097" />
<img width="1362" height="569" alt="image" src="https://github.com/user-attachments/assets/2f9123c0-43a0-44b4-8b6f-45b1dca97f1b" />
<img width="1181" height="188" alt="image" src="https://github.com/user-attachments/assets/ca75bcba-907d-40fc-bfbf-2f94c526432f" />
<img width="1365" height="576" alt="image" src="https://github.com/user-attachments/assets/8a15d796-5c3a-4ac4-9c90-0053eae0df45" />

<img width="1157" height="251" alt="image" src="https://github.com/user-attachments/assets/7512cca3-c1d9-48cf-b041-131d8fecebc1" />

<img width="968" height="564" alt="image" src="https://github.com/user-attachments/assets/56b422de-4253-4c9e-9128-138e373b69d3" />

## Conclusion
You have successfully:

- Configured a Route 53 health check with email notifications.
- Configured failover routing in Route 53.
- Verified high availability of a web application across multiple Availability Zones.

---

## Notes
- Lab Category: **Compute Services**
- Region: Do not change the lab Region unless instructed.
