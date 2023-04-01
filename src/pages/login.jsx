import { Button } from '@/components/ui/Button'

export default function Example() {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 px-6 sm:px-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Se connecter
          </h2>
        </div>

        <div className="mt-8 shadow-lg sm:mx-auto sm:w-full sm:max-w-md">
          <div className="rounded-lg bg-zinc-50 px-4 py-8 shadow-lg dark:shadow-teal-500   sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  E-mail
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="E-mail"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:pl-4 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mot de passe
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Mot de passe"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:pl-4 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Se souvenir de moi
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-teal-500 hover:text-teal-600"
                  >
                    Mot de passe oublié?
                  </a>
                </div>
              </div>

              <div>
                <Button variant="teal" value="Se connecter" type="submit" />
              </div>
            </form>

            
          </div>
        </div>
      </div>
    </>
  )
}
