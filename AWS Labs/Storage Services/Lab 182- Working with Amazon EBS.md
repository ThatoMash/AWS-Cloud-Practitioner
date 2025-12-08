# AWS EBS Hands-On Lab

## Lab Overview

For this lab, I created and worked with **Amazon Elastic Block Store (Amazon EBS)** to gain hands-on experience with cloud storage. I personally created an EBS volume, attached it to an EC2 instance, formatted it, and explored snapshot and restoration features.

This lab demonstrates practical AWS storage management, helping me understand provisioning, mounting, backing up, and restoring EBS volumes.


<img width="919" height="218" alt="image" src="https://github.com/user-attachments/assets/4dea1162-89a6-48b1-964e-939dc314702e" />


---

## Objectives

By completing this lab, I was able to:

* Create and attach an EBS volume to an EC2 instance
* Format and mount the volume with a file system
* Create a snapshot of an EBS volume
* Restore a new volume from a snapshot
* Verify data persistence and recovery


---

## Lab Architecture

For this lab, I set up an **EC2 instance with an attached EBS volume**, and I created a snapshot to restore the data to a new volume.


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

<img width="1358" height="558" alt="image" src="https://github.com/user-attachments/assets/8ee18008-9268-42be-b0ab-00c8863e6f48" />

<img width="1362" height="566" alt="image" src="https://github.com/user-attachments/assets/ddbf7313-d40b-465c-94be-d1856d6d7d69" />

<img width="1365" height="567" alt="image" src="https://github.com/user-attachments/assets/821a0778-9c2e-4db3-949b-4e7878033a86" />

<img width="1365" height="559" alt="image" src="https://github.com/user-attachments/assets/95ba1806-9db8-4207-94c9-b4f6926587f6" />

<img width="1362" height="561" alt="image" src="https://github.com/user-attachments/assets/d879c7d0-e279-4c5d-a2da-28540af4a849" />

<img width="1365" height="513" alt="image" src="https://github.com/user-attachments/assets/8573965e-dc1c-49a3-940f-9144be967915" />


---

## Task 2: Attach the Volume to the EC2 Instance

I attached the volume I created to my EC2 instance:

1. Select **My Volume**.
2. Choose **Actions → Attach Volume**.
3. Choose the **Lab** instance.
4. Set device name to **/dev/sdb**.
5. Volume state changed to **In-use**.


<img width="1358" height="453" alt="image" src="https://github.com/user-attachments/assets/4f518e2c-7178-432b-8326-af86f34b0ca8" />

<img width="1362" height="565" alt="image" src="https://github.com/user-attachments/assets/21adc515-f47a-4e60-89d6-c876bff36106" />



---

## Task 3: Connect to the EC2 Instance

I connected to my instance using **EC2 Instance Connect** and opened the terminal to complete the remaining tasks.

<img width="1358" height="259" alt="image" src="https://github.com/user-attachments/assets/0bc0bd89-bb69-4298-8416-591f1717c877" />

<img width="1364" height="575" alt="image" src="https://github.com/user-attachments/assets/463c08fe-25ed-4578-8f25-82fdecb64c7d" />

<img width="1360" height="233" alt="image" src="https://github.com/user-attachments/assets/ffe3b3e3-59e8-40c6-a3d4-b05da5181430" />


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



<img width="1365" height="356" alt="image" src="https://github.com/user-attachments/assets/1f7d5d33-86ea-4876-a445-4732201c82b0" />

<img width="1362" height="293" alt="image" src="https://github.com/user-attachments/assets/7b8abb91-97ab-4863-a598-10351ad9f3a5" />

<img width="1365" height="67" alt="image" src="https://github.com/user-attachments/assets/120f09e8-48d7-44ee-86cd-50cc5d41582f" />

<img width="1365" height="171" alt="image" src="https://github.com/user-attachments/assets/a24e205b-878b-48e8-a42d-1a8f6f589885" />


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


<img width="1365" height="577" alt="image" src="https://github.com/user-attachments/assets/b49682ae-e2f3-4e64-84ec-df9a1450cae7" />


<img width="1365" height="361" alt="image" src="https://github.com/user-attachments/assets/850981a4-04de-4994-bb12-a69489fd1fb4" />


<img width="1361" height="572" alt="image" src="https://github.com/user-attachments/assets/c57ca537-2672-45c4-8f81-3cffcaf3cb78" />


<img width="1365" height="275" alt="image" src="https://github.com/user-attachments/assets/5a4b908d-af22-46b9-ac0b-017962b651a9" />


<img width="1356" height="53" alt="image" src="https://github.com/user-attachments/assets/1e11a05f-d21e-47ee-943a-6942792ecf7a" />


---

## Task 6: Restore the Snapshot to a New Volume

### 6.1 Create the Restored Volume

I restored my snapshot to a new EBS volume:

1. Select **My Snapshot → Actions → Create Volume from Snapshot**.
2. Use the same **Availability Zone**.
3. Tag it: Name = Restored Volume.
4. Wait until status shows **Available**.


<img width="1363" height="572" alt="image" src="https://github.com/user-attachments/assets/3f2e8f25-ce7e-4feb-8d19-be1e04b8dfea" />

<img width="1362" height="276" alt="image" src="https://github.com/user-attachments/assets/60e95720-70aa-4822-b493-698cde1c4655" />

<img width="1365" height="593" alt="image" src="https://github.com/user-attachments/assets/223dfedc-e7e9-46c5-b9d3-054939cfcd9b" />

<img width="1365" height="566" alt="image" src="https://github.com/user-attachments/assets/257c6c48-f7fe-4f1b-ba5e-c9ef8a660b3e" />

<img width="1365" height="217" alt="image" src="https://github.com/user-attachments/assets/1690300a-7282-41e1-99a5-1ad80f996163" />

<img width="1365" height="566" alt="image" src="https://github.com/user-attachments/assets/860e53e0-944e-4f9a-9ad6-f042e6fd241e" />


### 6.2 Attach the Restored Volume

I attached the restored volume to my EC2 instance using device **/dev/sdc**.



<img width="1361" height="323" alt="image" src="https://github.com/user-attachments/assets/f90cccd2-5ed2-451e-b29b-def4c355805f" />

<img width="1350" height="353" alt="image" src="https://github.com/user-attachments/assets/655b6a7a-8e98-409d-aa41-644884607883" />

<img width="1365" height="514" alt="image" src="https://github.com/user-attachments/assets/bb3c13a1-01dc-4192-8571-8e9d7c17f761" />

<img width="1362" height="329" alt="image" src="https://github.com/user-attachments/assets/02d06fcd-c888-416c-9f69-5b09902e6e01" />



### 6.3 Mount and Verify

I mounted the restored volume and verified the file:

```bash
sudo mkdir /mnt/data-store2
sudo mount /dev/sdc /mnt/data-store2
ls /mnt/data-store2/file.txt
```

The file created earlier was successfully recovered.

<img width="1350" height="55" alt="image" src="https://github.com/user-attachments/assets/2a56cd95-1430-4def-a253-5a9a7fc02cb8" />


---

## What I Learned

Through this lab, I gained hands-on experience by personally:

* Creating and attaching EBS volumes
* Formatting and mounting storage on EC2
* Using snapshots for backup and recovery
* Restoring data from snapshots to new volumes
* Ensuring storage persistence in the cloud


This lab strengthened my understanding of **AWS storage management** and how to maintain **reliable, recoverable storage solutions**.

---

## Additional Resources

* [Amazon EBS Documentation](https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html)
* [EC2 Instance Connect](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Connect-using-EC2-Instance-Connect.html)
* [EBS Snapshots](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html)
* [Mounting an EBS Volume](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html)

![
