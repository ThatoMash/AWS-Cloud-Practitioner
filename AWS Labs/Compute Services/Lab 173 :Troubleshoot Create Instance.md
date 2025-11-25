# Troubleshooting the Creation of an EC2 Instance

## Activity Overview

In this activity, you use the AWS Command Line Interface (AWS CLI) to launch Amazon Elastic Compute Cloud (Amazon EC2) instances.

When you create the instance, you will reference a user data script to configure the instance with an Apache web server, MariaDB, and PHP—commonly known as a **LAMP stack**. The instance will host the **Café Web Application**.

**Diagram Placeholder:**
<img width="642" height="355" alt="image" src="https://github.com/user-attachments/assets/c293d3d7-2ed8-4420-9309-d9aebf7ee154" />


---

## Objectives

* Launch an EC2 instance using AWS CLI.
* Troubleshoot AWS CLI commands and EC2 service settings using **basic troubleshooting tips** and the **nmap utility**.



---

## Task 1: Connecting to the CLI Host Instance

1. Open the **AWS Management Console**, go to **EC2 → Instances**.
2. Select the **CLI Host** instance.
3. Click **Connect → EC2 Instance Connect → Connect**.
4. You are now connected and can run AWS CLI commands.

**Screenshot Placeholder:**
<img width="1364" height="562" alt="image" src="https://github.com/user-attachments/assets/19cc9179-101e-4edc-b844-178186f9e9c1" />
<img width="1365" height="559" alt="image" src="https://github.com/user-attachments/assets/7ca299b8-a13c-43c9-a5db-b9e286828bc8" />
<img width="1365" height="558" alt="image" src="https://github.com/user-attachments/assets/9f3af3f7-f462-4c23-8c62-fed3a2a34da7" />


---

## Task 2: Configuring the AWS CLI

1. On the CLI Host instance, configure AWS CLI:

```bash
aws configure
```

2. Enter the following when prompted:

* **AWS Access Key ID:** `<Copy from lab details>`
* **AWS Secret Access Key:** `<Copy from lab details>`
* **Default region name:** `<LabRegion>`
* **Default output format:** `json`

**Screenshot Placeholder:**
<img width="1361" height="469" alt="image" src="https://github.com/user-attachments/assets/bec0d7c4-e007-4067-b05a-ec6b6f8412a6" />


---

## Task 3: Creating an EC2 Instance Using the AWS CLI

### Task 3.1: Observe the Script Details

1. Backup the script:

```bash
cd ~/sysops-activity-files/starters
cp create-lamp-instance-v2.sh create-lamp-instance.backup
```

2. Open the script for observation:

```bash
view create-lamp-instance-v2.sh
```

3. Analyze key sections:

* **Line 1:** `#!/bin/bash`
* **Lines 7–11:** Instance type `t3.small`
* **Lines 16–29:** Retrieve VPC named `Cafe VPC`
* **Lines 31–55:** Subnet ID, Key Pair, AMI ID
* **Lines 57–122:** Cleanup existing instances and security groups
* **Lines 124–152:** Create new security group (ports 22 & 80)
* **Lines 154–168:** Create EC2 instance with user data

4. Examine the **user data script**:

```bash
cat create-lamp-instance-userdata-v2.txt
```

**Screenshot Placeholder:**
![Script Observation](./images/placeholder.png)

---

### Task 3.2: Run the Script

Run the script:

```bash
./create-lamp-instance-v2.sh
```

* The script may fail intentionally; this is expected for troubleshooting.

**Screenshot Placeholder:**
![Script Run](./images/placeholder.png)

---

### Task 3.3: Troubleshoot Issues

#### Issue #1: Invalid AMI ID

* Error: "InvalidAMIID.NotFound"
* Steps to resolve:

  1. Verify the AMI ID in the script matches the **region**.
  2. Update the AMI ID if incorrect.
  3. Re-run the script.
* Expected result: `Public IPv4 address assigned`

**Screenshot Placeholder:**
![AMI ID Issue](./images/placeholder.png)

#### Issue #2: Web Page Not Loading

* Symptoms: Public IP assigned, but web page doesn't load.
* Steps to resolve:

  1. Check security group allows **port 80**.
  2. Verify **httpd service** is running:

  ```bash
  sudo systemctl status httpd
  ```

  3. Install **nmap** to scan ports:

  ```bash
  sudo yum install -y nmap
  nmap -Pn <public-ip>
  ```
* Expected result: Port 80 accessible.

**Screenshot Placeholder:**
![Port Check](./images/placeholder.png)

#### Verify User Data Script Ran

* Check log file:

```bash
sudo tail -f /var/log/cloud-init-output.log
```

* Verify **MariaDB**, **PHP**, and **Café Web Application** scripts executed successfully.
* Exit tail: `Ctrl-C`

**Screenshot Placeholder:**
![Cloud-init logs](./images/placeholder.png)

---

## Task 4: Verifying the Website Functionality

1. Open browser:

```
http://<public-ip>/cafe
```

2. Confirm home page loads.
3. Test order workflow:

* Navigate to **Menu → Submit Order → Order History**.
* Ensure order details are recorded in the database.

**Screenshot Placeholder:**
![Cafe Website](./images/placeholder.png)

---

## Conclusion

* Successfully launched an EC2 instance using AWS CLI.
* Troubleshot CLI commands and EC2 settings with **nmap** and logs.
* Verified the **Café Web Application** LAMP stack runs correctly.

**Screenshot Placeholder:**
![Lab Completion](./images/placeholder.png)
