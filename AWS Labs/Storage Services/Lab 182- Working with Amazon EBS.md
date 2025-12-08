# AWS EBS Hands-On Lab

## Lab Overview

For this lab, I created and worked with **Amazon Elastic Block Store (Amazon EBS)** to gain hands-on experience with cloud storage. I personally created an EBS volume, attached it to an EC2 instance, formatted it, and explored snapshot and restoration features.

This lab demonstrates practical AWS storage management, helping me understand provisioning, mounting, backing up, and restoring EBS volumes.

![Lab Overview Placeholder](PUT-YOUR-IMAGE-LINK-HERE)

---

## Objectives

By completing this lab, I was able to:

* Create and attach an EBS volume to an EC2 instance
* Format and mount the volume with a file system
* Create a snapshot of an EBS volume
* Restore a new volume from a snapshot
* Verify data persistence and recovery

![Objectives Placeholder](PUT-YOUR-IMAGE-LINK-HERE)

---

## Lab Architecture

For this lab, I set up an **EC2 instance with an attached EBS volume**, and I created a snapshot to restore the data to a new volume.

![Architecture Diagram Placeholder](PUT-YOUR-IMAGE-LINK-HERE)

---

## Task 1: Create a New EBS Volume

I created a new EBS volume using the AWS Management Console:

1. Navigate to **EC2 → Volumes**.
2. Choose **Create Volume**.
3. Configure:

   * **Volume Type:** General Purpose SSD (gp2)
   * **Size:** 1 GiB
   * **Availability Zone:** Same as my EC2 instance
   * **Tags:** Name = My Volume
4. Created the volume and waited for it to show **Available**.

![Task 1 Placeholder](PUT-YOUR-IMAGE-LINK-HERE)

---

## Task 2: Attach the Volume to the EC2 Instance

I attached the volume I created to my EC2 instance:

1. Select **My Volume**.
2. Choose **Actions → Attach Volume**.
3. Choose the **Lab** instance.
4. Set device name to **/dev/sdb**.
5. Volume state changed to **In-use**.

![Task 2 Placeholder](PUT-YOUR-IMAGE-LINK-HERE)

---

## Task 3: Connect to the EC2 Instance

I connected to my instance using **EC2 Instance Connect** and opened the terminal to complete the remaining tasks.

![Task 3 Placeholder](PUT-YOUR-IMAGE-LINK-HERE)

---

## Task 4: Create and Configure the File System

I formatted and mounted the EBS volume:

```bash
df -h
sudo mkfs -t ext3 /dev/sdb
sudo mkdir /mnt/data-store
sudo mount /dev/sdb /mnt/data-store
echo "/dev/sdb /mnt/data-store ext3 defaults,noatime 1 2" | sudo tee -a /etc/fstab
cat /etc/fstab
df -h
```

I also created a test file:

```bash
sudo sh -c "echo some text has been written > /mnt/data-store/file.txt"
cat /mnt/data-store/file.txt
```

![Task 4 Placeholder](PUT-YOUR-IMAGE-LINK-HERE)

---

## Task 5: Create an EBS Snapshot

I created a snapshot of my EBS volume for backup:

1. Navigate to **EC2 → Volumes**.
2. Select **My Volume → Actions → Create Snapshot**.
3. Tag it: Name = My Snapshot.
4. Waited until the snapshot status was **Completed**.
5. Deleted the original test file:

```bash
sudo rm /mnt/data-store/file.txt
ls /mnt/data-store/file.txt
```

![Task 5 Placeholder](PUT-YOUR-IMAGE-LINK-HERE)

---

## Task 6: Restore the Snapshot to a New Volume

### 6.1 Create the Restored Volume

I restored my snapshot to a new EBS volume:

1. Select **My Snapshot → Actions → Create Volume from Snapshot**.
2. Use the same **Availability Zone**.
3. Tag it: Name = Restored Volume.
4. Wait until status shows **Available**.

![Task 6.1 Placeholder](PUT-YOUR-IMAGE-LINK-HERE)

### 6.2 Attach the Restored Volume

I attached the restored volume to my EC2 instance using device **/dev/sdc**.

![Task 6.2 Placeholder](PUT-YOUR-IMAGE-LINK-HERE)

### 6.3 Mount and Verify

I mounted the restored volume and verified the file:

```bash
sudo mkdir /mnt/data-store2
sudo mount /dev/sdc /mnt/data-store2
ls /mnt/data-store2/file.txt
```

The file created earlier was successfully recovered.

![Task 6.3 Placeholder](PUT-YOUR-IMAGE-LINK-HERE)

---

## What I Learned

Through this lab, I gained hands-on experience by personally:

* Creating and attaching EBS volumes
* Formatting and mounting storage on EC2
* Using snapshots for backup and recovery
* Restoring data from snapshots to new volumes
* Ensuring storage persistence in the cloud

![What I Learned Placeholder](PUT-YOUR-IMAGE-LINK-HERE)

This lab strengthened my understanding of **AWS storage management** and how to maintain **reliable, recoverable storage solutions**.

---

## Additional Resources

* [Amazon EBS Documentation](https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html)
* [EC2 Instance Connect](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Connect-using-EC2-Instance-Connect.html)
* [EBS Snapshots](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html)
* [Mounting an EBS Volume](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html)

![Additional Resources Placeholder](PUT-YOUR-IMAGE-LINK-HERE)
