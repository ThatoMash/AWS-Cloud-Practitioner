# Nastro Bliss Restaurant Website & AWS Deployment Demonstration

<img width="428" height="418" alt="image" src="https://github.com/user-attachments/assets/5a650d7b-480f-4dc4-8e1b-8e751e21c8e0" />


## Introduction
This project demonstrates the development of a **static website for Nastro Bliss**, a contemporary African cuisine restaurant based in Johannesburg.  
The goal is to improve customer interactions by providing an online platform for menu browsing, booking reservations, and submitting orders. Additionally, this project showcases the benefits of hosting on **AWS**, emphasizing reliability, cost-effectiveness, and operational efficiency.

By building this project, we explore key AWS services such as **S3, Route 53, CloudFront, IAM, and SES**, demonstrating a practical example of cloud migration benefits for small businesses.

---

## Restaurant Overview: Nastro Bliss
Nastro Bliss is a beloved local restaurant specializing in grill and fire menu items. It serves local residents, corporate clients, and tourists looking to experience contemporary African cuisine.  

### Current Operational Challenges
- **Booking Confusion**: Reservations through phone, walk-ins, or social media often get lost or double-booked.  
- **Order Mix-ups**: Orders placed verbally or via text frequently lead to incorrect items or forgotten requests.  
- **No Digital Presence**: Without an organized online platform, customers cannot easily access menus, hours, or availability.

### Business Impact
| Metric | Impact |
|--------|--------|
| Lost Revenue | Customers turn to competitors with better online booking systems (~30%) |
| Staff Time Wasted | Hours spent managing manual bookings and resolving order errors (~40%) |
| Customer Satisfaction | Negative reviews from booking mix-ups and incorrect orders (~25%) |

---

## Project Deliverables

### Static Website
- Fully functional static website hosted on **AWS S3**
- Key features:
  - Home Page
  - Menu Page
  - Booking Page
  - Order Submission Form
  - Confirmation Page  

**Visual placeholders:**
<img width="1035" height="652" alt="image" src="https://github.com/user-attachments/assets/e0e4704a-cbdc-4931-82b4-1c9438511a15" />

<img width="1027" height="648" alt="image" src="https://github.com/user-attachments/assets/db0b62ff-145a-49e6-870a-22798e847ce6" />

<img width="1015" height="653" alt="image" src="https://github.com/user-attachments/assets/c5d42531-aba6-4f99-98b1-ba3d7a28aba1" />

  
### AWS Migration Presentation
- Slides covering:
  - Restaurant overview
  - Challenges and impact
  - Proposed AWS solution
  - Cost analysis
  - Benefits of migration

### View the Presentation Slides:[Nastro Bliss Presentation](./)

        PRESENTANTION

**Visual placeholders:**
<img width="518" height="349" alt="image" src="https://github.com/user-attachments/assets/981f653e-fa26-4ce0-94f0-81fe2c6d4378" />
  

## Website Development Highlights

### Design & User Experience
- Clean and intuitive interface  
- Minimal colours for readability  
- Incorporates images, videos, and simple animations for engagement  


https://github.com/user-attachments/assets/5d0c5cab-f38e-4427-994f-a80ce93610ac



### Functionality
- Centralized **online booking system** with instant confirmation  
- Digital menu & online ordering capabilities  
- Real-time updates for hours, location, and availability  
- Hosted images stored in **Amazon S3**  

---

## AWS Implementation

### Services Used
| Requirement | AWS Service | Purpose |
|-------------|------------|---------|
| Host website | S3 | Static website hosting & image storage |
| Domain management | Route 53 | Custom domain setup |
| Content delivery | CloudFront | Faster load times worldwide |
| Access control | IAM | Security and access management |
| Email notifications | SES | Optional email confirmations and notifications |

### Estimated Monthly Costs
| Service | Cost |
|---------|------|
| S3 | R818–854 |
| Route 53 | R8.75/month + R210/year domain registration |
| CloudFront | R35 |
| SES | < R17.50 for first 1,000 emails |
| **Total** | ~R175/month |

### Security & Reliability
- **Data Protection**: AWS provides high-level security to protect customer data.  
- **Compliance Ready**: Infrastructure follows best practices for data handling.  
- **Automatic Backups**: Customer reservations and orders are safely backed up.

---

## Project Structure


---

## Deployment Steps
1. Upload website files to **S3**  
2. Enable **Static Website Hosting**  
3. Configure **Bucket Policy** for public access  
4. Use **CloudFront** for fast global delivery  
5. Connect domain using **Route 53**  

---

## Testing & Observations
- Forms tested for correct submission  
- Website content and media load properly from S3  
- Booking confirmations and menu access verified  
- CloudWatch used to monitor resource usage and availability  

---

## Conclusion
This project demonstrates how Nastro Bliss can:
- Streamline bookings and order management  
- Reduce operational errors and staff workload  
- Improve customer satisfaction and increase revenue  
- Leverage **AWS** for reliability, scalability, and cost-efficiency  



## Next Steps / Future Improvements
- Add **online payment integration**  
- Introduce **loyalty program features**  
- Enhance customer analytics and reporting  
- Automate website deployment via **AWS CI/CD tools**  
- Explore mobile app integration for bookings and orders

