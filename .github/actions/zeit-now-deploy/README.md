# zeit-now-deploy

Deploy a project using ZEIT Now.

## Inputs

### `path`

**Optional** The project path.

### `prod`

**Optional** Create a production deployment. Default `false`.

### `token`

**Required** The ZEIT token.

## Outputs

### `url`

The URL that the project was deployed to.

## Example usage

```
name: example
on: [push]
jobs:
  deploy:
    steps:

    - id: deploy
      name: 🚀 Deploy
      uses: jameslnewell/zeit-now-deploy
      with:
        token: ${{ secrets.ZEIT_TOKEN }}

    - run: echo "Deployed to ${{ steps.deploy.outputs.url }}"

```
