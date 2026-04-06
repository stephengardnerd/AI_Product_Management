# AutoML Modeling Report

## Overview
This document details the results of multiple binary classification models and a 3-class model used to classify medical images (normal, bacterial pneumonia, and viral pneumonia). The models were tested on balanced, unbalanced, and dirty datasets, with the objective of improving pneumonia detection in children.

## Binary Classifier with Clean/Balanced Data

- **Dataset**: 600 total images (300 normal, 300 pneumonia), with 480 for training and 60 for testing.
- **Model Training Time**: 2 hours 58 minutes.
- **Confusion Matrix**: 29 True Positives, 1 False Negative for pneumonia; 30 True Negatives, 0 False Positives for normal.
  ![Confusion Matrix](./images/confusion_matrix_clean_balanced.png)
  
- **Precision and Recall**: Both were 98.3% for a score threshold of 0.5.
  ![Precision and Recall](./images/precision_recall_clean_balanced.png)

## Binary Classifier with Clean/Unbalanced Data

- **Dataset**: 300 total images (100 normal, 200 pneumonia), with 30 images used for testing.
- **Model Training Time**: 1 hour 43 minutes.
- **Confusion Matrix**: The model performed perfectly with 100% accuracy in classifying all test images.
  ![Confusion Matrix](./images/confusion_matrix_unbalanced.png)
  
- **Precision and Recall**: Both achieved 100%.
  ![Precision and Recall](./images/precision_recall_unbalanced.png)

## Binary Classifier with Dirty/Balanced Data

- **Dataset**: 200 total images (100 normal, 100 pneumonia), with intentional label swapping in 30 images.
- **Model Training Time**: 2 hours 33 minutes.
- **Confusion Matrix**: 7 normal images were misclassified as pneumonia, and 3 pneumonia images were misclassified as normal.
  ![Confusion Matrix](./images/confusion_matrix_dirty_balanced.png)
  
- **Precision and Recall**: Both dropped to 55%, due to the presence of false positives and false negatives.
  ![Precision and Recall](./images/precision_recall_dirty_balanced.png)

## 3-Class Model

- **Dataset**: 300 total images (100 normal, 100 bacterial pneumonia, 100 viral pneumonia).
- **Model Training Time**: 5 hours 13 minutes.
- **Confusion Matrix**: The model correctly classified 10 images for each class, except for 1 bacterial image misclassified as normal.
  ![Confusion Matrix](./images/confusion_matrix_3class.png)
  
- **Precision and Recall**: Both were 96.7% for a score threshold of 0.5.
  ![Precision and Recall](./images/precision_recall_3class.png)

## Conclusion
The clean, unbalanced dataset model performed best with 100% precision and recall, while the dirty data model had the worst performance, highlighting the critical importance of clean, balanced datasets for accurate model results.
