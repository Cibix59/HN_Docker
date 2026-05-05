FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
COPY . .

#compilation
RUN javac -d out src/components/*.java src/tests/*.java

#execute main pour tester
CMD ["java", "-cp", "out", "tests.Main"]