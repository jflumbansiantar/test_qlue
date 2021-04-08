# Create a single line script that returns the number of httpd processes that are running on the current machine
pgrep -c 'httpd|apache2'

# From the current folder (/tmp), provide some bash commands that will rename all the *.txt files in  mig33/inner_folder/ to *.dat
for f in *.txt;
do mv -- "$f" "${f%.txt}.dat"
done