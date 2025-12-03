# EC2 Monitoring & CloudWatch Lab – README

## Lab Overview

In this lab, I monitored an EC2 instance using Amazon CloudWatch, SNS, dashboards, and CPU stress tools. This gave me hands-on experience in tracking instance performance, visualizing metrics, and testing alerts under load.

---

# Task 1: Create an SNS Topic and Subscription

1. Go to SNS → Topics → Create Topic.
2. Type: Standard.
3. Name: MyCwAlarm.
4. Click Create.
5. Open the topic → Subscriptions → Create subscription.
6. Protocol: Email.
7. Endpoint: Your email address.
8. Confirm the subscription from your email inbox.

<img width="1349" height="558" alt="image" src="https://github.com/user-attachments/assets/0386d729-a823-4001-86c8-0f847d109958" />
<img width="1358" height="563" alt="image" src="https://github.com/user-attachments/assets/2f9ce1d8-55d4-4f31-9b2a-dffa5b7e4894" />
<img width="1348" height="563" alt="image" src="https://github.com/user-attachments/assets/07197682-a4c3-4af8-91fd-8f98af7b0997" />




---

# Task 2: Create a CloudWatch Alarm

1. Go to CloudWatch → Metrics.
2. Select EC2 → Per-Instance Metrics.
3. Choose CPUUtilization.
4. Set:
   - Statistic: Average
   - Period: 1 minute
   - Threshold: Greater than 60%
5. Add SNS notification: MyCwAlarm.
6. Name the alarm: LabCPUUtilizationAlarm.

<img width="1361" height="562" alt="image" src="https://github.com/user-attachments/assets/0f9ee03f-98af-45ff-af36-5798e8e5ce2d" />
<img width="1365" height="561" alt="image" src="https://github.com/user-attachments/assets/84574bbe-cc8d-4e9e-b887-779a7339de63" />
<img width="1365" height="465" alt="image" src="https://github.com/user-attachments/assets/7d193432-836c-4a3b-b143-c92c1fa9ba43" />
<img width="1364" height="566" alt="image" src="https://github.com/user-attachments/assets/2cd348bb-1e0a-41e3-9538-b44d977c126f" />
<img width="1365" height="564" alt="image" src="https://github.com/user-attachments/assets/2a4b1f52-fbbd-4ca1-8ea4-adcb9453260a" />
<img width="1358" height="565" alt="image" src="https://github.com/user-attachments/assets/8df1ab1a-fb5f-41fd-bdf3-351bf5cbb278" />
<img width="1359" height="554" alt="image" src="https://github.com/user-attachments/assets/46ec47ba-9243-451d-9af0-d92c30f58957" />
<img width="1365" height="560" alt="image" src="https://github.com/user-attachments/assets/cb186390-06ed-426e-bab2-1f420f0901e9" />


# Task 3: Connect to EC2 and Install Tools

1. Connect to the EC2 instance using EC2 Instance Connect or Session Manager.
2. Install the stress tool:
   sudo yum install -y stress
3. Verify installation:
   stress --version

[PLACEHOLDER: EC2 Terminal Screenshot]

---

# Task 4: Run a CPU Stress Test

1. Run the CPU stress command:
   sudo stress --cpu 10 -v --timeout 400s
2. Optionally monitor CPU load:
   top
3. View the alarm change to "In alarm" (red) on CloudWatch.

<img width="1346" height="582" alt="image" src="https://github.com/user-attachments/assets/b146da66-9763-42f2-9dfd-dd8f35243dae" />


---

# Task 5: Check SNS Alarm Notification

1. Open your email inbox.
2. Look for the SNS notification email triggered by the CPU alarm.

[PLACEHOLDER: SNS Email Screenshot]

---

# Task 6: Create a CloudWatch Dashboard

1. Go to CloudWatch → Dashboards → Create dashboard.
2. Name the dashboard: LabEC2Dashboard.
3. Add a line widget.
4. Add the CPUUtilization metric.
5. Save the dashboard.

<img width="1346" height="552" alt="image" src="https://github.com/user-attachments/assets/ab2c36a0-8134-4109-b760-7f9e778c0ebd" />

<img width="1365" height="568" alt="image" src="https://github.com/user-attachments/assets/883037b3-8984-421a-8a28-59708a477188" />




# Summary

- SNS topic created.
- CloudWatch alarm configured.
- Stress tool installed and executed.
- CPU alarm triggered.
- SNS email received.
- Dashboard created.
- Alarm returned to normal.

