set -e

NEW_VERSION=$1
HELM_REPO_URL="https://x-access-token:${HELM_REPO_PAT}@github.com/valkosch/helm-charts

git clone $HELM_REPO_URL helm-repo
cd helm-repo

sed -i "s/tag: .*/tag: \"$NEW_VERSION\"/" ./personal-helm/values.yml

git config user.name "Semantic Release Bot"
git config user.email "bot@github.com"

git add .
git commit -m "chore(release): update image tag to $NEW_VERSION [skip ci]"
git push
