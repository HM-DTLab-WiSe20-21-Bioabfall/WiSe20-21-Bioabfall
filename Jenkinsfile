pipeline {
    //Agent defines whether you like to run ot on the master or another specific slavem
    agent any
    options {
        timestamps()
        //Define the GitLab Connection from jenkins
        gitLabConnection('Gitlab LRZ HM')
        //Send Information back to GitLab 
        gitlabCommitStatus(name: 'jenkins CI')
    }
    stages {
        stage('Install') { 
        //Bring the Code Up-To Date
            steps{
                echo 'Install...'
                bat 'npm install'
                gitlabCommitStatus(name: 'Install') {
                    //Update the GitLab Status
                }
           }    
        }

        stage('Build') { 
        //Try to Build and Compile the existing Code
            steps{
                echo 'Build...'
                bat 'npm run ng build'
                //echo 'Build  Success'
                gitlabCommitStatus(name: 'Build') {
                    //Update GitLab Status
                }
           }
        }
        
        
        stage('Test') {
        //Try to run a Unit Test in google chrome-headless
            steps{
                echo 'Test... '
                //ng test --watch=false --browsers=ChromeHeadless 
                bat 'npm run test-headless'
                //echo 'Test Success'
                gitlabCommitStatus(name: 'Test') {
                    //Update GitLab Status
                }
                
           }
        }
        /**
        stage('E2E') {
        //Try to run a Unit Test in google chrome-headless
            steps{
                echo 'Test E2E...'
                //bat 'npm run ng e2e'
                echo 'E2E Test Success'
                gitlabCommitStatus(name: 'Test E2E') {
                    //Update GitLab Status for E2E Test
                }
                
           }
        }
        

        
        stage('Deploy') {
        // Preload for the final deployment stage
            steps{
                echo 'Deploy...'
                // Deployment disabled 
                //The Production Build 
                bat 'node_modules/.bin/ng build --prod'
                //Build the ZIP package for the deployment
                bat 'octo pack --id="FillterWeb" --version 1.0.%BUILD_NUMBER% --format=zip --basePath "dist/fillter/"'
                //NOT FINISHED! Should be a push of information to Octopus Deploy from GitLab with a JSON File
                //bat 'octo build-information --package-id=FillterWeb --version 1.0.%BUILD_NUMBER% --server http://vsl008.wi.private.hm.edu/ --apiKey API-VNKR8NYBQ6GVLAY5D0HGERWCQC'
                //Push the Package to the Octopus Server
                bat 'octo push --server http://vsl008.wi.private.hm.edu/ --package "FillterWeb.1.0.%BUILD_NUMBER%.zip" --replace-existing --apiKey API-VNKR8NYBQ6GVLAY5D0HGERWCQC'
                //Create a Release for Octopus to Deploy the package to the target environment
                bat 'octo create-release --project=fillter.pwa --deployto dev --server http://vsl008.wi.private.hm.edu/ --apiKey API-VNKR8NYBQ6GVLAY5D0HGERWCQC --progress'
                echo 'Finish deployment'
                
            }    
        }
        
        stage('Post') {
            steps{
                echo 'Notify GitLab Final Status'
                //updateGitlabCommitStatus(name: 'Tested', state: 'success')
                //Update the GitLab Status
            }
        }   
        **/
    }
} 
