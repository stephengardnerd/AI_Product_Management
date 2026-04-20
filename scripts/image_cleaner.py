import os
import subprocess
import sys

# List of required package
required_packages = ["os"]

# Function to install missing packages
def install_packages(packages):
    for package in packages:
        try:
            __import__(package)
        except ImportError:
            print(f"Installing {package}...")
            subprocess.check_call([sys.executable, "-m", "pip", "install", package])

# Install necessary packages
install_packages(required_packages)

def rename_images(directory):
    # Check if the directory exists
    if not os.path.isdir(directory):
        print("The specified directory does not exist.")
        return

    # Loop through all files in the directory
    for filename in os.listdir(directory):
        # Check if the file is a .jpeg file
        if filename.endswith(".jpeg"):
            # Split the filename at the first underscore
            new_name = filename.split('_', 1)[-1]  # This removes everything before and including the first underscore
            # Get the full path of the original and new file
            old_file = os.path.join(directory, filename)
            new_file = os.path.join(directory, new_name)
            # Rename the file
            os.rename(old_file, new_file)
            print(f"Renamed: {filename} -> {new_name}")

# Ask the user for the directory containing the .jpeg images
directory = input("Enter the folder directory containing the .jpeg images: ")
rename_images(directory)
