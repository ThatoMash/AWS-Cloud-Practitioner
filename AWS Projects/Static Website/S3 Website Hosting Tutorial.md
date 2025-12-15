# Host a Static Website on Amazon S3

## Introduction

In this project, I went through the steps to host a **static website** on **Amazon S3** using the **AWS Web Interface**. I uploaded the website files, configured permissions, and made the website publicly accessible while documenting each step with image placeholders for clarity.

---

## Overview

I used Amazon S3 (Simple Storage Service) to host a static website, which includes HTML, CSS, and JavaScript files. During the project, I:

* Went through the process of creating an S3 bucket
* Uploaded the website files
* Enabled static website hosting
* Configured bucket permissions
* Accessed the website via a public URL

---

## Objectives

In this project, I aimed to:

* Learn how to host a static website on S3
* Upload and manage website files
* Configure public access permissions
* Verify website accessibility

---

## Prerequisites

Before starting, I made sure to have:

* An AWS Account
* Basic knowledge of HTML
* Internet browser

---

## Lab Steps (Using AWS Web Interface)

### Step 1: Sign in to AWS Management Console

I went to the AWS Console and searched for **S3**.



<img width="1365" height="564" alt="image" src="https://github.com/user-attachments/assets/175fb352-c8a9-4dc3-8bac-f5382e8bfcfd" />


---

### Step 2: Create an S3 Bucket

I clicked **Create bucket**, entered a unique bucket name, selected my region, disabled **Block all public access**, and acknowledged the warning.


<img width="1359" height="332" alt="image" src="https://github.com/user-attachments/assets/90957e5b-af24-4ddd-8262-6b5abe1ddb73" />

Create a unique name 

<img width="1365" height="393" alt="image" src="https://github.com/user-attachments/assets/85a0a5fb-8d91-4a4a-82e6-0620245fdebe" />

Disable 'Block all public acesss'

<img width="1287" height="351" alt="image" src="https://github.com/user-attachments/assets/12b0b806-ca2f-4b10-955c-00e93cf84139" />

---

### Step 3: Upload Website Files

I opened the bucket, clicked **Upload**, and added my `index.html` and other website files.

**Screenshot Placeholder**

<img width="1365" height="484" alt="image" src="https://github.com/user-attachments/assets/651b4a5d-c7a9-4f55-8a66-f4f42b3c179f" />

Adding my index.html file as well as folders

<img width="1357" height="470" alt="image" src="https://github.com/user-attachments/assets/619e4ab1-ac86-48a6-861f-760fe3fa0823" />

folders

<img width="1358" height="583" alt="image" src="https://github.com/user-attachments/assets/78465ad2-c455-4ddb-af73-84943edccef6" />

---

### Step 4: Enable Static Website Hosting

I went to the **Properties** tab, scrolled to **Static website hosting**, enabled it, set **index.html** as the index document, and saved changes.

properties

<img width="1364" height="343" alt="image" src="https://github.com/user-attachments/assets/20bf3293-01c2-4c87-8ee4-b9c18656e399" />

Enable static website hosting
<img width="1331" height="167" alt="image" src="https://github.com/user-attachments/assets/5595ef78-2a45-4220-b60b-d23d855ac4c5" />
<img width="1360" height="310" alt="image" src="https://github.com/user-attachments/assets/1f1bfc4b-c57a-4b8c-93f3-354c98e35d67" />

set as Index.html
<img width="1343" height="90" alt="image" src="https://github.com/user-attachments/assets/3cac0662-535b-44e5-80db-df0612847c3b" />

---

### Step 5: Enable Access Control list

I navigated to the **Permissions** tab, enabled the **ACLS** to allow public read access.

**Screenshot Placeholder**
<img width="1365" height="379" alt="image" src="https://github.com/user-attachments/assets/c9f145a8-5d84-4669-9f91-8684b44d92ec" />

---

### Step 6: Access the Website

I copied the **Bucket website endpoint** and pasted it into my browser to verify that the website was live.

**Screenshot Placeholder**

<img width="1357" height="682" alt="image" src="https://github.com/user-attachments/assets/58167184-f0ae-4c31-b497-d1e0f1cf5610" />

---

## Expected Outcome

I was able to access the static website publicly, and it loaded successfully via the S3 URL.

---

## Optional Tasks

I also went through additional tasks such as:

* Enabling versioning
* Adding a custom error page
* Using Amazon CloudFront for HTTPS and caching

---

## Conclusion

Throughout this project, I went through the complete process of hosting a static website on **Amazon S3** using the **AWS Web Interface**. I uploaded files, configured permissions, enabled hosting, and verified accessibility, gaining practical experience in managing S3-hosted websites.

---

