pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('preflight') {
      steps {
        script {
            if (isUnix()) {
                 sh 'node -v'
            } else {
                bat 'node -v'
            }
        }
      }
    }
    stage('install dep') {
      steps {
        script {
        if (isUnix()) {
                 sh 'npm install'
            } else {
                bat 'npm install'
            }
        }
      }
    }
    stage('test') {
      steps {
        script {
        if (isUnix()) {
                 sh 'npx playwright test'
            } else {
                bat 'npx playwright test'
            }
       }
      }
    } 
  }
}