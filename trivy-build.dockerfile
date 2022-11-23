FROM aquasec/trivy:0.19.2

RUN trivy image --download-db-only 