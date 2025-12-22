# Challenge Lab: Amazon S3

## Introduction
In this challenge lab, I worked with **Amazon Simple Storage Service (Amazon S3)** to create a storage bucket, upload an object, configure public access at the object level, and verify access through both a web browser and the AWS Command Line Interface (AWS CLI).

This lab focused on understanding how S3 handles object storage, permissions, and public accessibility — skills that are essential for real-world cloud and web hosting scenarios.

---

## Lab Overview
The goal of this challenge was to complete a set of tasks using **AWS Management Console** and **AWS CLI** to demonstrate hands-on knowledge of Amazon S3.

**Key tasks included:**
- Creating an S3 bucket
- Uploading an object to the bucket
- Making the object publicly accessible
- Accessing the object via a browser
- Listing bucket contents using AWS CLI

---

## Objectives
By completing this lab, I was able to:
- Create an Amazon S3 bucket
- Upload objects to S3
- Configure object-level public access
- Access S3 objects using a web browser
- List S3 bucket contents using AWS CLI

---

## Tools & Services Used
- Amazon S3
- Amazon EC2 (CLI Host)
- AWS Management Console
- AWS Command Line Interface (AWS CLI)

---

## Lab Steps

### 1. Connecting to the CLI Host Instance
I connected to the pre-provisioned **CLI Host EC2 instance** using **EC2 Instance Connect**. This instance was used to configure AWS CLI credentials and interact with S3 programmatically.

📸 **CLI Host Connection Placeholder**  
![CLI Host Connection](images/cli-host-connect.png)

---

### 2. Configuring the AWS CLI
Once connected to the CLI Host, I configured the AWS CLI using the credentials provided in the lab.

Configuration details:
- **Region:** us-west-2
- **Output format:** json

This setup allowed me to run AWS CLI commands to manage S3 resources.

📸 **AWS CLI Configuration Placeholder**  
![AWS CLI Configuration](images/aws-cli-configure.png)

---

### 3. Creating an S3 Bucket
Using the AWS CLI, I created a new S3 bucket with a unique name in the `us-west-2` region.

This bucket was used to store and manage objects throughout the lab.

📸 **S3 Bucket Creation Placeholder**  
![S3 Bucket Creation](images/s3-bucket-created.png)

---

### 4. Uploading an Object to the Bucket
After creating the bucket, I uploaded an object (sample file) into the S3 bucket using AWS CLI commands.

This object served as the content I later configured for public access.

📸 **Object Upload Placeholder**  
![Object Upload](images/s3-object-upload.png)

---

### 5. Accessing the Object via Browser (Initial Attempt)
I attempted to access the uploaded object using its S3 object URL in a web browser.

As expected, access was denied because the object permissions were still private by default.

📸 **Access Denied Placeholder**  
![Access Denied](images/s3-access-denied.png)

---

### 6. Making the Object Publicly Accessible
To resolve the access issue, I updated the **object-level permissions** to allow public read access.

Important note:
- Only the **object** was made public — the bucket itself remained private.

This step demonstrated the principle of **least privilege**.

📸 **Public Object Permissions Placeholder**  
![Public Object Permissions](images/s3-object-public.png)

---

### 7. Accessing the Object via Browser (Successful)
After updating the permissions, I accessed the object again using a web browser.

This time, the object loaded successfully, confirming that public access was correctly configured.

📸 **Successful Browser Access Placeholder**  
![Successful Access](images/s3-browser-access.png)

---

### 8. Listing Bucket Contents Using AWS CLI
Finally, I listed the contents of the S3 bucket using the AWS CLI to confirm that the object was present.

This validated both the upload and the ability to interact with S3 programmatically.

📸 **AWS CLI List Bucket Placeholder**  
![List Bucket Contents](images/aws-cli-s3-ls.png)

---

## Key Learnings
- S3 buckets are private by default for security
- Public access can be applied at the **object level** without exposing the entire bucket
- AWS CLI provides an efficient way to manage S3 resources
- Understanding S3 permissions is critical for secure cloud storage

---

## Conclusion
This challenge lab strengthened my understanding of Amazon S3 fundamentals, including bucket creation, object management, and permission configuration. It also reinforced the importance of secure access control while enabling public content delivery when required.

This hands-on experience reflects real-world use cases such as hosting static assets and managing cloud storage securely.

---

✅ **Lab Status: Completed Successfully**