# Project Proposal: Data Labeling Approach for Pneumonia Detection

## Overview

### Project Goal:
The aim of this project is to help medical professionals, particularly doctors, quickly identify cases of pneumonia in children using machine learning (ML). The project involves the classification of chest x-ray images, with the ultimate goal of developing an ML-based classification tool that can detect pneumonia across large datasets.

![Pneumonia Detection Process](./images/image_1.png)

## Data Labels

### Labeling Strategy:
- **Initial Data**: The dataset consists of 101 images with two existing columns: `img_url` and `label`.
- **New Labels**: A third column, `title`, was created to assist in further labeling and improve future jobs. This was necessary to prevent mislabeling and reduce the degradation of the job due to hyperlinked labels.

![Data Labeling](./images/image_2.png)

## Test Questions & Quality Assurance

### Number of Test Questions:
- **Test Setup**: Given the small dataset size, eight test questions were developed. Each annotator must complete a verification test after every fifth image classification (5% test).

### Test Question Improvement:
- **Accuracy Boosting**: For each case where the label is "Pneumonia," the following additional accuracy questions are required:
  1. Is this a healthy chest x-ray image?
  2. Are you more than 50% confident that the image depicts signs of pneumonia?
  3. Can you explain your decision to a medical professional?

![Test Question Setup](./images/image_3.png)

## Contributor Satisfaction

### Addressing Low Ratings:
If annotator feedback indicates a rating below 3.5 for test questions or instructions, these areas will be revised. Focus will be placed on improving clarity in the instructions and ensuring that the test questions provide clear steps for annotators to improve accuracy.

## Limitations & Improvements

### Data Biases:
- **Bias in Data**: There is an inherent bias that assumes all images in the dataset show either healthy or pneumonia-related symptoms. Annotators are asked to select "Unknown" when they cannot confidently make a classification.

![Bias in Data](./images/image_4.png)

### Designing for Longevity:
- **Future Enhancements**: The labeling job will be periodically retrained to adjust for new medical knowledge and data (e.g., new x-ray types or outlier cases like non-child images). Annotator feedback will be used to ensure long-term accuracy.

![Long-term Design](./images/image_5.png)
